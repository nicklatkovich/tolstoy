/* eslint react/prop-types: 0 */
import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LoadingIndicator from 'app/components/elements/LoadingIndicator';
import Apis from 'shared/api_client/ApiInstances';
import { PrivateKey } from 'shared/ecc';
import user from 'app/redux/User';
import {validate_account_name} from 'app/utils/ChainValidation';
import SignUp from 'app/components/modules/SignUp';
import runTests from 'shared/ecc/test/BrowserTests';
import g from 'app/redux/GlobalReducer';
import GeneratedPasswordInput from 'app/components/elements/GeneratedPasswordInput';
import { translate } from 'app/Translator';
import { localizedCurrency } from 'app/components/elements/LocalizedCurrency';
import { FormattedHTMLMessage } from 'react-intl';
import { SUPPORT_EMAIL } from 'config/client_config';

const PASSWORD_MIN_LENGTH = 32;

class CreateAccount extends React.Component {

    static propTypes = {
        loginUser: React.PropTypes.func.isRequired,
        showSignUp: React.PropTypes.func.isRequired,
        serverBusy: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            password_valid: '',
            name_error: '',
            server_error: '',
            loading: false,
            cryptographyFailure: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    componentDidMount() {
        const cryptoTestResult = runTests();
        if (cryptoTestResult !== undefined) {
            console.error('CreateAccount - cryptoTestResult: ', cryptoTestResult);
            this.setState({cryptographyFailure: true});
        }
        // Facebook Pixel events #200
        if (process.env.BROWSER) fbq('track', 'Lead');
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({server_error: '', loading: true});
        const {name, password, password_valid} = this.state;
        if (!name || !password || !password_valid) return;

        let public_keys;
        // try generating btc address via blockcypher
        // if no success - abort (redirect with try again)
        let icoAddress = ''
        try {
            const pk = PrivateKey.fromWif(password);
            public_keys = [1, 2, 3, 4].map(() => pk.toPublicKey().toString());
        } catch (error) {
            public_keys = ['owner', 'active', 'posting', 'memo'].map(role => {
                const pk = PrivateKey.fromSeed(`${name}${role}${password}`);
                return pk.toPublicKey().toString();
            });
        }

        fetch('/api/v1/accounts', {
            method: 'post',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                csrf: $STM_csrf,
                name,
                owner_key: public_keys[0],
                active_key: public_keys[1],
                posting_key: public_keys[2],
                memo_key: public_keys[3]//,
                //json_meta: JSON.stringify({"ico_address": icoAddress})
            })
        }).then(r => r.json()).then(res => {
            if (res.error || res.status !== 'ok') {
                console.error('CreateAccount server error', res.error);
                if (res.error === 'Unauthorized') {
                    this.props.showSignUp();
                }
                this.setState({server_error: res.error || translate('unknown'), loading: false});
            } else {
                // Facebook Pixel events #200
                fbq('track', 'CompleteRegistration');
                window.location = `/login.html#account=${name}&msg=accountcreated`;
                // this.props.loginUser(name, password);
                // const redirect_page = localStorage.getItem('redirect');
                // if (redirect_page) {
                //     localStorage.removeItem('redirect');
                //     browserHistory.push(redirect_page);
                // }
                // else {
                //     browserHistory.push('/@' + name);
                // }
            }
        }).catch(error => {
            console.error('Caught CreateAccount server error', error);
            this.setState({server_error: (error.message ? error.message : error), loading: false});
        });
    }

    onPasswordChange(password, password_valid) {
        this.setState({password, password_valid});
    }

    onNameChange(e) {
        const name = e.target.value.trim().toLowerCase();
        this.validateAccountName(name);
        this.setState({name});
    }

    validateAccountName(name) {
        let name_error = '';
        let promise;
        if (name.length > 0) {
            name_error = validate_account_name(name);
            if (!name_error) {
                promise = Apis.db_api('get_accounts', [name]).then(res => {
                    return res && res.length > 0 ? translate('account_name_is_not_available') : '';
                });
            }
        }
        if (promise) {
            promise.then(error => this.setState({name_error: error}));
        } else {
            this.setState({name_error});
        }
    }

    render() {
        if (!process.env.BROWSER) { // don't render this page on the server
            return <div className="row">
                <div className="column">
                    {translate('loading')}..
                </div>
            </div>;
        }

        const {
            name, password_valid, showPasswordString,
            name_error, server_error, loading, cryptographyFailure
        } = this.state;

        const {loggedIn, logout, offchainUser, serverBusy} = this.props;
        const submit_btn_disabled =
            loading ||
            !name ||
            !password_valid ||
            name_error;
        const submit_btn_class = 'button action' + (submit_btn_disabled ? ' disabled' : '');

        if (serverBusy || $STM_Config.disable_signups) {
            return <div className="row">
                <div className="column">
                    <div className="callout alert">
                        <p>{translate('membership_invitation_only')}</p>
                    </div>
                </div>
            </div>;
        }
        if (cryptographyFailure) {
            return <div className="row">
                <div className="column">
                    <div className="callout alert">
                        <h4>{translate('ctyptography_test_failed')}</h4>
                        <p>{translate('we_will_be_unable_to_create_account_with_this_browser')}.</p>
                        <p>
                            {translate('the_latest_versions_of') + ' '}
                            <a href="https://www.google.com/chrome/">Chrome</a>
                            {' ' + translate('and')}
                            <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>
                            {' ' + translate('are_well_tested_and_known_to_work_with')}
                        </p>
                    </div>
                </div>
            </div>;
        }
        if (!offchainUser) {
            return <SignUp />;
        }

        if (loggedIn) {
            return <div className="row">
                <div className="column">
                    <div className="callout alert">
                        <p>{translate('you_need_to_logout_before_creating_account', { logoutLink: <a href="#" onClick={logout}>{translate('logout')}</a>})}.</p>
                        <p>{translate('steemit_can_only_register_one_account_per_verified_user')}.</p>
                    </div>
                </div>
            </div>;
        }

        const existingUserAccount = offchainUser.get('account');
        if (existingUserAccount) {
            return <div className="row">
                <div className="column">
                    <div className="callout alert">
                        <p>{translate('our_records_indicate_you_already_have_account')}: <strong>{existingUserAccount}</strong></p>
                        <p>{translate('to_prevent_abuse_APP_NAME_can_only_register_one_account_per_user', {amount: localizedCurrency(3)})}</p>
                        <p>
                            {translate('you_can_either') + ' '}
                            <a href="/login.html">{translate('login')}</a>
                            {translate('to_your_existing_account_or') + ' '}
                            <a href={"mailto:" + SUPPORT_EMAIL}>{translate('send_us_email')}</a>
                            {' ' + translate('if_you_need_a_new_account')}.
                        </p>
                    </div>
                </div>
            </div>;
        }

        return (
            <div className="CreateAccount row">
                <div className="column large-7 small-10">
                    <h2>{translate('sign_up')}</h2>
                    <div className="CreateAccount__rules">
                        <hr />
                        {/* currently translateHtml() does not work, using <FormattedHTMLMessage /> instead */}
                        <p><FormattedHTMLMessage id="the_rules_of_APP_NAME" /></p>
                        <hr />
                    </div>
                    <form onSubmit={this.onSubmit} autoComplete="off" noValidate method="post">
                        <div className={name_error ? 'error' : ''}>
                            <label className="uppercase">{translate('username')}
                                <input type="text" name="name" autoComplete="off" onChange={this.onNameChange} value={name} />
                            </label>
                            <p>{name_error}</p>
                        </div>
                        <GeneratedPasswordInput onChange={this.onPasswordChange} disabled={loading} showPasswordString={name.length > 0 && !name_error} />
                        <br />
                        {server_error && <div className="callout alert">
                            <h5>{translate('couldnt_create_account_server_returned_error')}:</h5>
                            <p>{server_error}</p>
                            {server_error === 'Email address is not confirmed' && <a href="/enter_email">{translate('confirm_email')}</a>}
                        </div>}
                        <noscript>
                            <div className="callout alert">
                                <p>{translate('form_requires_javascript_to_be_enabled')}</p>
                            </div>
                        </noscript>
                        {loading && <LoadingIndicator type="circle" />}
                        <input disabled={submit_btn_disabled} type="submit" className={submit_btn_class + ' uppercase'} value={translate('sign_up')} />
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'create_account',
    component: connect(
        state => {
            return {
                loggedIn: !!state.user.get('current'),
                offchainUser: state.offchain.get('user'),
                serverBusy: state.offchain.get('serverBusy'),
                suggestedPassword: state.global.get('suggestedPassword'),
            }
        },
        dispatch => ({
            loginUser: (username, password) => dispatch(user.actions.usernamePasswordLogin({username, password, saveLogin: true})),
            showSignUp: () => dispatch(user.actions.showSignUp()),
            logout: e => {
                if (e) e.preventDefault();
                dispatch(user.actions.logout())
            }
        })
    )(CreateAccount)
};
