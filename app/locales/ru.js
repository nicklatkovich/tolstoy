const ru = {
	// this variables mainly used in navigation section
	about: "О проекте",
	explore: "Исследовать",
	whitepaper: "Бумага о Steem",
	buy_steem: "Купить Steem",
	sell_steem: "Продать Steem",
	market: "Маркет",
	stolen_account_recovery: "Возврат украденного аккаунта",
	change_account_password: "Изменить пароль аккаунта",
	steemit_chat: "Steemit чат",
	witnesses: "Свидетели",
	privacy_policy: "Политика Конфиденциальности",
	terms_of_service: "Условия пользования",
	sign_up: "Регистрация",
	/* end navigation */
	buy: 'Купить',
	sell: 'Продать',
	buy_steem_power: 'Купить Steem Power',
	transaction_history: 'История транзакций',
	submit_a_story: 'Добавить историю',
	nothing_yet: 'Пока ничего нет',
	close: 'Закрыть',
	post_promo_text: "Authors get paid when people like you upvote their post \n If you enjoyed what you read here, earn ${amount} of Steem Power \n when you {link} and vote for it.",
	read_only_mode: 'Due to server maintenance we are running in read only mode. We are sorry for the inconvenience.',
	membership_invitation_only: 'Membership to Steemit.com is now under invitation only because of unexpectedly high sign up rate.',
	submit_email_to_get_on_waiting_list: 'Submit your email to get on the waiting list',
	login: 'Войти',
	logout: 'Выйти',
	show_less_low_value_posts: "Show less low value posts",
	show_more_low_value_posts: "Show more low value posts",
	select_topic: 'Выбрать топик',
	tags_and_topics: "Тэги и топики",
	filter: "Фильтр",
	show_more_topics: "Показать больше топиков",
	we_require_social_account: 'Steemit funds each account with over ${signup_bonus} worth of Steem Power; to prevent abuse, we require new users to login via social media.',
	personal_info_will_be_private: 'Твоя персональная информация будет оставаться',
	personal_info_will_be_private_link: 'приватной',
	continue_with_facebook: 'Продолжить с Facebook',
	continue_with_reddit: 'Продолжить с Reddit',
	requires_positive_karma: 'необходима позитивная карма Reddit комментирования',
	dont_have_facebook: 'Нет Facebook или Reddit аккаунта?',
	subscribe_to_get_sms_confirm: 'Subscribe to get a notification when SMS confirmation is available',
	by_verifying_you_agree: 'Подтверждая ваш аккаунт вы соглашаетесь с Steemit',
	by_verifying_you_agree_terms_and_conditions: 'условиями и соглашениями',
	terms_and_conditions: 'Условия и Соглашения',
	// this is from top-right dropdown menu
	hot: 'горячее',
	trending: 'набирающее популярность',
	payout_time: 'время выплаты',
	active: 'актывное',
	responses: 'ответы',
	popular: 'популярное',
	/* end dropdown menu */
	loading: 'Загрузка',
	cryptography_test_failed: 'Криптографический тест провален',
	unable_to_log_you_in: 'У нас не получится залогинить вас в этом браузере',
	latest_browsers_do_work: 'Последние версии {chromeLink} и {mozillaLink} хорошо тестированы и работают с steemit.com.',
	account_creation_succes: 'Твой аккаунт успешно создан!',
	account_recovery_succes: 'Твой аккаунт успено восстановлен!',
	password_update_succes: 'Пароль для {accountName} был успешно обновлен',
	password_is_bound_to_account: "This password is bound to your account\'s owner key and can not be used to login to this site. \nHowever, you can use it to {changePasswordLink} to obtain a more secure set of keys.",
	update_your_password: 'обновить твой пароль',
	enter_username: 'Введи свой username',
	password_or_wif: 'Пароль или WIF',
	requires_auth_key: 'This operation requires your {authType} key (or use your master password)',
	keep_me_logged_in: 'Оставлять меня залогиненным',
	// this are used mainly in "submit a story" form
	title: "Заголовок",
	write_your_story: 'Написать свою историю',
	editor: 'Редактор',
	reply: 'Ответить',
	edit: 'Редактировать',
	delete: 'Удалить',
	cancel: 'Отмена',
	clear: 'Очистить',
	save: 'Сохранить',
	upvote_post: 'Проголосовать за пост',
	update_post: 'Обновить пост',
	markdown_is_supported: 'Поддерживается стилизация с Markdown',
	preview: 'Предварительный просмотр',
	// TODO do not forget to implment REQUIRED error in reply Editor
	markdown_not_supported: 'Markdown здесь не поддерживается',
	// markdown: 'Markdown', // эта строка возможно будет удалена
	welcome_to_the_blockchain: 'Добро пожаловать в Blockchain!',
	your_voice_is_worth_something: 'Your voice is worth something',
	learn_more: 'Узнать больше',
	get_sp_when_sign_up: 'Get ${signupBonus} of Steem Power when you sign up today.',
	all_accounts_refunded: 'All Recovered Accounts have been fully Refunded',
	steemit_is_now_open_source: 'Steemit.com is now Open Source',
	// this is mainly from ReplyEditor
	tag_your_story: 'Tag (up to 5 tags), the first tag is your main category.',
	select_a_tag: 'Выбрать тэг',
	required: 'Обязательно',
	shorten_title: 'Сократите заголовок',
	exceeds_maximum_length: 'Пребывает максимальную длину ({maxKb}KB)',
	including_the_category: "(including the category '{rootCategory}')",
	use_limited_amount_of_tags: 'You have {tagsLength} tags total{includingCategory}.  Please use only 5 in your post and category line.',
	// this is mainly used in CategorySelector
	use_limitied_amount_of_categories: 'Пожалуйста используйте не более {amount} категорий',
	use_one_dash: 'Используйте только одно тире',
	use_spaces_to_separate_tags: 'Используйте пробел чтобы разделить тэги',
	use_only_allowed_characters: 'Используйте только строчные буквы, цифры и одно тире',
	must_start_with_a_letter: 'Должно начинаться с буквы',
	must_end_with_a_letter_or_number: 'Должно заканчиваться с буквы или номера',
	// tags page
	tag: 'Тэг',
	replies: 'Ответы',
	payouts: 'Выплаты',
	need_password_or_key: 'Вам нужен приватный пароль или ключ (не публичный ключ)',
	// BlocktradesDeposit
	change_deposit_address: 'Изменить адрес депозита',
	get_deposit_address: 'Получить адрес депозита',
	// for example 'powered by Blocktrades'
	powered_by: 'Powered by',
	send_amount_of_coins_to: 'Отправить {value} {coinName} к',
	amount_is_in_form: 'Amount is in the form 99999.999',
	insufficent_funds: 'Insufficent funds',
	update_estimate: 'Update Estimate',
	get_estimate: 'Get Estimate',
	memo: 'Memo',
	must_include_memo: 'You must include the memo above',
	estimate_using: 'Подсчитать используя',
	amount_to_send: 'Amount to send {estimateInputCoin}',
	deposit_using: 'Deposit using', // example: 'deposit using Steem Power' // TODO: is this example right?
	suggested_limit: 'Suggested limit {depositLimit}',
	internal_server_error: 'Внутренняя ошибка сервера',
	enter_amount: 'Ввести количество',
	processing: 'Обрабатывается',
	broadcasted: 'Транслируется',
	confirmed: 'Подтверждено',
	remove: 'Удалить',
	collapse_or_expand: "Свернуть/Развернуть",
	reveal_comment: 'Показать комментарий',
	are_you_sure: 'Вы уверены?',
	// PostFull.jsx
	by: ' ', // здеь специально ничего нет, пример: "posted by 'Vitya'" > "добавил 'Vitya'"
	in: 'в',
	share: 'Поделиться',
	in_reply_to: 'в ответ на',
	replied_to: 'ответил', // тоже что и 'by'
	transfer_amount_to_steem_power: "Передать {amount} в STEEM POWER",
	transfer_amount_steem_power_to: "Передать {amount} STEEM POWER в",
	recieve_amount_steem_power_from: "Получить {amount} STEEM POWER от",
	transfer_amount_steem_power_from_to: "Передать {amount} STEEM POWER от {from} к",
	transfer_amount_to: "Передать {amount} к",
	recieve_amount_from: "Получить {amount} от",
	transfer_amount_from: "Передать {amount} от",
	stop_power_down: "Stop power down",
	start_power_down_of: "Start power down of",
	curation_reward_of_steem_power_for: 'Curation reward of {reward} STEEM POWER for',
	author_reward_of_steem_power_for: 'Author reward of {payout} and {reward} STEEM POWER for',
	recieve_interest_of: 'Receive interest of {interest}',
	// TODO find where this is used and write an example
	to: 'to',
	account_not_found: 'Аккаунт не найден',
	this_is_wrong_password: 'Это неправильный пароль',
	do_you_need_to: 'Вам нужно',
	recover_your_account: 'восстановить ваш аккаунт', // this probably will end with question mark
	reset_usernames_password: "Сбросить пароль пользователя {username}",
	this_will_update_usernames_authtype_key: 'Это обновит {username} {authType} ключ',
	the_rules_of_steemit: "The first rule of Steemit is: Do not lose your password.<br /> The second rule of Steemit is: Do <strong>not</strong> lose your password.<br /> The third rule of Steemit is: We cannot recover your password.<br /> The fourth rule: If you can remember the password, it&apos;s not secure.<br /> The fifth rule: Use only randomly-generated passwords.<br /> The sixth rule: Do not tell anyone your password.<br /> The seventh rule: Always back up your password.",
	account_name: 'Имя аккаунта',
	recover_password: 'Восстановить аккаунт',
	current_password: 'Текущий пароль',
	recent_password: 'Недавний пароль',
	generated_password: 'Сгенерированный пароль',
	recover_account: 'Восстановить аккаунт',
	new: 'новый', // ex. 'Generated Password (new)', but not exclusively
	backup_password_by_storing_it: 'Back it up by storing in your password manager or a text file',
	click_to_generate_password: 'Нажмите чтобы сгененировать пароль',
	re_enter_generate_password: 'Повторно введите пароль',
	understand_that_steemit_cannot_recover_password: 'Я понимаю что Steemit не сможет восстановить утраченный пароль',
	i_saved_password: 'Я надежно сохранил сгенерированный пароль',
	update_password: 'Обновить пароль',
	password_must_be_characters_or_more: 'Пароль должен быть {amount} символов или больше',
	passwords_do_not_match: 'Пароли не совпадают',
	you_need_private_password_or_key_not_a_public_key: 'You need a private password or key (not a public key)',
	account_updated: 'Аккаунт обновлен',
	warning: 'внимание',
	your_password_permissions_were_reduced: 'Your password permissions were reduced',
	if_you_did_not_make_this_change: 'If you did not make this change please',
	owhership_changed_on: 'Ownership Changed On',
	deadline_for_recovery_is: 'Deadline for recovery is',
	i_understand_dont_show_again: "Понимаю, больше не показывать",
	ok: 'Ок', // Лучше использовать "хорошо" или "ладно"?
	convert_to_steem: 'Convert to Steem',
	steem_dollars_will_be_unavailable: 'This action will take place one week from now and can not be canceled. These Steem Dollars will immediatly become unavailable',
	amount: 'Количество',
	steem_dollars: 'STEEM ДОЛЛАРЫ',
	convert: 'Конвертировать',
	invalid_amount: 'Неверное количество',
	insufficent_balance: 'Недостаточный баланс',
	in_week_convert_steem_dollars_to_steem: 'In one week, convert {amount} STEEM DOLLARS into STEEM',
	order_placed: 'Заказ размещен', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: 'Подписаться',
	unfollow: 'Отписаться',
	mute: 'Блокировать',
	unmute: 'Разблокировать',
	confirm_password: 'Подтвердить пароль',
	login_to_see_memo: 'login to see memo',
	post: 'Пост', // places used: tooltip in MediumEditor
	unknown: 'Неизвестный', // exp.: 'unknown error'
	account_name_is_not_available: 'Имя аккаунта не доступно',
	type: 'Тип',
	price: 'Цена',
	// Market.jsx
	last_price: 'Последняя цена',
	'24h_volume': 'Объем за 24 часа',
	bid: 'Покупка',
	ask: 'Продажа',
	spread: 'Разница',
	total: 'Итого',
	available: 'Доступно',
	lowest_ask: 'Лучшая цена продажи',
	highest_bid: 'Лучшая цена покупки',
	buy_orders: 'Заказы на покупку',
	sell_orders: 'Заказы на продажу',
	trade_history: 'История сделок',
	open_orders: 'Открытые сделки',
	sell_amount_for_atleast: 'Продать {amount_to_sell} за {min_to_receive} по цене  ({effectivePrice})',
	buy_atleast_amount_for: 'Купить {min_to_receive} за {amount_to_sell} ({effectivePrice})',
	higher: 'Дороже', // context is about prices
	lower: 'Дешевле', // context is about prices
	total_sd_dollars: "Сумма SD ($)",
	sd_dollars: "SD ($)",
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: 'Недействительно',
	account_name_is_not_found: 'Имя аккаунта не найдено',
	unable_to_recover_account_not_change_ownership_recently: 'We are unable to recover this account, it has not changed ownership recently.',
	password_not_used_in_last_days: 'This password was not used on this account in the last 30 days.',
	request_already_submitted_contact_support: 'Your request has been already submitted and we are working on it. Please contact support@steemit.com for the status of your request.',
	recover_account_intro: "From time to time, a Steemian’s owner key may be compromised. Stolen Account Recovery gives the rightful account owner 30 days to recover their account from the moment the thief changed their owner key. Stolen Account Recovery can only be used on steemit.com if the account owner had perviously listed ‘Steemit’ as their account trustee and complied with Steemit’s Terms of Service.",
	login_with_facebook_or_reddit_media_to_verify_identity: 'Please login with Facebook or Reddit to verify your identity',
	login_with_social_media_to_verify_identity: 'Please login with {show_social_login} to verify you identity',
	enter_email_toverify_identity: 'We need to verify your identity. Please enter your email address below to begin the verification.',
	email: 'Электронная почта',
	continue_with_email: "Продолжить с электронной почтой",
	thanks_for_submitting_request_for_account_recovery: '<p>Thanks for submitting your request for Account Recovery using Steem’s blockchain-based multi factor authentication.</p> <p>We will respond to you as quickly as possible, however, please expect there may be some delay in response due to high volume of emails.</p> <p>Please be prepared to verify your identity.</p> <p>Regards,</p> <p>Ned Scott</p> <p>CEO Steemit</p>',
	recovering_account: 'Recovering account',
	checking_account_owner: 'Checking account owner',
	sending_recovery_request: 'Sending recovery request',
	cant_confirm_account_ownership: 'We can\'t confirm account ownership. Check your password',
	account_recovery_request_not_confirmed: "Account recovery request is not confirmed yes, please get back later, thank you for your patience.",
	vote: 'Vote',
	witness: 'Свидетели',
	top_witnesses: 'Топ свидетелей',
	// user's navigational menu
	feed: 'Лента',
	wallet: 'Кошелек',
	blog: 'Блог',
	change_password: 'Сменить пароль',
	// UserProfile
	unknown_account: 'Неизвестный аккаунт',
	user_hasnt_made_any_posts_yet: "Looks like {name} hasn't made any posts yet!",
	user_hasnt_started_bloggin_yet: "Looks like {name} hasn't started blogging yet!",
	user_hasnt_followed_anything_yet: "Looks like {name} hasn't followed anything yet!",
	user_hasnt_had_any_replies_yet: "{name} hasn't had any replies yet",
	users_blog: "блог {name}",
	users_posts: "посты {name}",
	users_wallet: "кошелек {name}",
	users_curation_rewards: "Кураторские вознаграждения {name}",
	users_author_rewards: "Авторские награды {name}",
	users_permissions: "Разрешения {name}",
	recent_replies_to_users_posts: "Recent replies to {name}'s posts",
	print: 'Print',
	curation_rewards: "Кураторские награды",
	author_rewards: 'Авторские награды',
	feeds: 'Лента',
	rewards: 'Награды',
	permissions: 'Разрешения',
	password: 'Пароль',
	posts: 'Посты',
	// english language does not need plurals, but your language might need it
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		zero {0 постов}
		one {# пост}
		few {# поста}
		many {# постов}
	}`,
	follower_count: `{followerCount, plural,
		zero {0 подписчиков}
		one {# подписчик}
		few {# подписчика}
		many {# подписчиков}
	}`,
	followed_count: `{followingCount, plural,
		zero {0 подписок}
		one {# подписка}
		few {# подписки}
		many {# подписок}
	}`,
	vote_count: `{voteCount, plural,
		zero {0 голосов}
		one {# голос}
		few {# голоса}
		many {# голосов}
	}`,
	response_count: `{responseCount, plural,
		zero {0 ответов}
		one {# ответ}
		few {# ответа}
		many {# ответов}
	}`,
	reply_count: `{replyCount, plural,
		zero {0 ответов}
		one {# ответ}
		few {# ответа}
		many {# ответов}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "This is ${name}'s reputation score.\n\nThe reputation score is based on the history of votes received by the account, and is used to hide low quality content.",
	newer: 'Новее',
	older: 'Старее',
	author_rewards_last_24_hours: 'Авторские вознаграждения за последние 24 часа',
	daily_average_author_rewards: 'Среднесуточные авторские вознаграждения',
	author_rewards_history: 'История авторских наград',
	balances: 'Балансы',
	estimate_account_value: 'Оценочная ценность аккаунта',
	next_power_down_is_scheduled_to_happen_at: 'The next power down is scheduled to happen',
	transfers_are_temporary_disabled: 'Переводы временно отключены',
	history: 'История',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: 'Кураторские награды за полседние 24 часа',
	daily_average_curation_rewards: 'Среднесуточные кураторские награды',
	estimated_curation_rewards_last_week: "Оценочные кураторские награды за последгюю неделю",
	curation_rewards_last_week: "Кураторские награды за последнюю неделю",
	curation_rewards_history: 'История кураторских наград',
	// Post.jsx
	now_showing_comments_with_low_ratings: 'Отображаем комментарии с низким рейтингом',
	hide: 'Скрыть',
	show: 'Показать',
	sort_order: 'Порядок сортировки',
	comments_were_hidden_due_to_low_ratings: 'Комментарии были скрыты из-за низкого рейтинга',
	we_will_be_unable_to_create_account_with_this_browser: 'У нас не получится создать аккаунт с этим браузером',
	you_need_to_logout_before_creating_account: 'Вам нужно {logoutLink} прежде чем вы сможете создать другой аккаунт',
	steemit_can_only_register_one_account_per_verified_user: 'Пожалуйста, имейте ввиду что Steemit может регистрировть только один аккаунт для каждого подтвержденного пользователя',
	username: 'Юзернейм',
	couldnt_create_account_server_returned_error: "Не получилось создать аккаунт. Сервер вернул эту ошибку",
	form_requires_javascript_to_be_enabled: 'Эта форма требует активированный в браузере javascript',
	our_records_indicate_you_already_have_account: 'Наши записи показывают что у вас уже есть steem аккант',
	to_prevent_abuse_steemit_can_only_register_one_account_per_user: 'In order to prevent abuse (each registered account costs 3 STEEM) Steemit can only register one account per verified user.',
	you_can_either_login_or_send_us_email: 'You can either {loginLink} to your existing account or  if you need a new account',
	send_us_email: 'отправьте нам электронная почта',
	connection_lost_reconnecting: 'Связь потеряна, переподключаемся',
	// Voting.jsx
	stop_seeing_content_from_this_user: 'Stop seeing content from this user',
	flagging_post_can_remove_rewards_you_can_still_unflag_late: 'Flagging a post can remove rewards and make this material less visible.  You can still unflag or upvote later if you change your mind.',
	downvote: 'Проголосовать против',
	pending_payout: 'Pending Payout',
	past_payouts: 'Past Payouts',
	and: 'и',
	more: 'больше',
	remove_vote: 'Убрать голос',
	upvote: 'Проголосовать за',
	we_will_reset_curation_rewards_for_this_post: 'will reset your curation rewards for this post',
	removing_your_vote: 'Удаляем ваш голос',
	changing_to_an_upvote: 'Изменяем на голос за',
	changing_to_a_downvote: 'Изменяем на голос против',
	confirm_flag: 'Confirm Flag',
	// TODO
	date_created: 'Дата создания',
	search: 'Поиск',
	begin_recovery: 'Начать восстановление',
	post_as: 'Запостить как', // 'Post as Misha'
	action: 'Действие',
	steem_app_center: 'Steem App Center',
	witness_thread: 'witness thread',
	you_have_votes_remaining: 'You have {votesCount} votes remaining',
	you_can_vote_for_maximum_of_witnesses: 'You can vote for a maximum of 30 witnesses',
	information: 'Информация',
	if_you_want_to_vote_outside_of_top_enter_account_name: 'If you would like to vote for a witness outside of the top 50, enter the account name below to cast a votes',
	view_the_direct_parent: 'View the direct parent',
	you_are_viewing_single_comments_thread_from: 'You are viewing a single comment&#39;s thread from',
	view_the_full_context: 'View the full context',
	this_is_a_price_feed_conversion: 'This is a price feed conversion. The one week day delay is necessary to prevent abuse from gaming the price feed average',
	your_existing_SD_are_liquid_and_transferable: 'Your existing Steem Dollars are liquid and transferable.  Instead you may wish to trade Steem Dollars directly in this site under {link} or transfer to an external market.',
	buy_or_sell: 'Buy or Sells',
	trending_30_day: 'трендовое (30 дней)',
	promoted: 'promoted',
	comments: 'Комментарии',
	topics: 'Topics',
	this_password_is_bound_to_your_accounts_private_key: 'This password is bound to your account\'s active key and can not be used to login to this page. You may use this active key on other more secure pages like the Wallet or Market pages.',
	potential_payout: 'Potential Payout',
	boost_payments: 'Boost Payments',
	authors: 'Authors',
	curators: 'Curators',
	date: 'Дата',
	no_responses_yet_click_to_respond: 'Ответов пока нет. Нажмите чтобы ответить.',
	click_to_respond: 'Нажмите чтобы ответить',
	new_password: 'Новый пароль',
	paste_a_youtube_or_vimeo_and_press_enter: 'Paste a YouTube or Vimeo and press Enter',
	there_was_an_error_uploading_your_image: 'There was an error uploading your image',
	raw_html: 'Raw HTML',
	please_remove_following_html_elements: 'Please remove the following HTML elements from your post: ',
	reputation: "Репутация",
	remember_voting_and_posting_key: "Remember voting & posting key",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: 'Заходить автоматически?',
	yes: 'Да',
	no: 'Нет',
	hide_private_key: 'Скрыть приватный ключ',
	login_to_show: 'Войти чтобы показать',
	steemit_cannot_recover_passwords_keep_this_page_in_a_secure_location: 'Steemit cannot recover passwords.  Keep this page in a secure location, such as a fireproof safe or safety deposit box.',
	steemit_password_backup: 'Steemit Password Backup',
	steemit_password_backup_required: 'Steemit Password Backup (required)',
	after_printing_write_down_your_user_name: 'After printing, write down your user name',
	public: 'Публичное',
	private: 'Приватное',
	public_something_key: 'Публичный {key} ключ',
	private_something_key: 'Приватный {key} ключ',
	posting_key_is_required_it_should_be_different: 'The posting key is used for posting and voting. It should be different from the active and owner keys.',
	the_active_key_is_used_to_make_transfers_and_place_orders: 'The active key is used to make transfers and place orders in the internal market.',
	the_owner_key_is_required_to_change_other_keys: 'The owner key is the master key for the account and is required to change the other keys.',
	the_private_key_or_password_should_be_kept_offline: 'The private key or password for the owner key should be kept offline as much as possible.',
	the_memo_key_is_used_to_create_and_read_memos: 'The memo key is used to create and read memos.',
	previous: 'Предыдущий',
	next: 'Следующий',
	browse: 'Посмотреть',
	not_valid_email: 'Не действительный адресы',
	thank_you_for_being_an_early_visitor_to_steemit: 'Thank you for being an early visitor to Steemit. We will get back to you at the earliest possible opportunity.',
	estimated_author_rewards_last_week: "Estimated author rewards last week",
	author_rewards_last_week: "Estimated author rewards last week",
	confirm: 'Подтвердить',
	asset: 'Актив',
	this_memo_is_private: 'This Memo is Private',
	this_memo_is_public: 'This Memo is Public',
	power_up: 'Power Up',
	transfer: 'Transfer',
	basic: 'Basic',
	advanced: 'Advanced',
	convert_to_steem_power: 'Convert to Steem Power',
	transfer_to_account: 'Transfer to Account',
	buy_steem_or_steem_power: 'Buy Steem or Steem Power',
	version: 'Version',
	about_steemit: 'About Steemit',
	steemit_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: 'Steemit is a social media platform where <strong>everyone</strong>&nbsp;gets <strong>paid</strong> for creating and curating content',
	steemit_is_a_social_media_platform_where_everyone_gets_paid: 'Steemit is a social media platform where everyone gets paid for creating and curating content. It leverages a robust digital points system, called Steem, that supports real value for digital rewards through market price discovery and liquidity.',
	learn_more_at_steem_io: 'Learn more at steem.io',
	resources: 'Resources',
	steem_whitepaper: 'Steem Whitepaper',
	join_our_slack: 'Join our Slack',
	steemit_support: 'Steemit Support',
	please_email_questions_to: 'Please email your questions to',
	sorry_your_reddit_account_doesnt_have_enough_karma: "Sorry, your Reddit account doesn't have enough Reddit Karma to qualify for a free sign up. Please add your email for a place on the waiting list",
	register_with_facebook: 'Register with Facebook',
	or_click_the_button_below_to_register_with_facebook: 'Or click the button below to register with Facebook',

}

export { ru }
