import translations from 'katejs/lib/translations';

/* eslint-disable quote-props */
const translate = {
  languages: ['ru'],
  ru: {
    ...translations.ru,
    'Assistant': 'Ассистент',
    'Prev': 'Пред.',
    'Next': 'След.',
    'Notes': 'Заметки',
    'Note': 'Заметкa',
    'Note done': 'Завершено',
    'Done': 'Выполнено',
    'Description': 'Описание',
    'Checklist': 'Список',
    'Show all': 'Показывать все',
    'NoteDone': 'Завершено',
    'Orders': 'Заказы',
    'Order': 'Заказ',
    'Product': 'Товар',
    'Products': 'Товары',
    'Date': 'Дата',
    'Number': 'Номер',
    'Clients': 'Клиенты',
    'Client': 'Клиент',
    'Phone': 'Телефон',
    'Total': 'Итого',
    'Amount': 'Количество',
    'Price': 'Цена',
    'Sum': 'Сумма',
    'Product sales': 'Продажи товаров',
    'Form report': 'Сформировать',
    'Period start': 'Начало периода',
    'Period end': 'Конец периода',
    'Address': 'Адрес',
    'Comment': 'Комментарий',
    'Period': 'Период',
    'Apply': 'Применить',
    'Paid': 'Оплачено',
    'To pay': 'Оплатить',
    'Find, create': 'Найти, создать',
    'Find, create client': 'Найти, создать клиента',
    'Client (name, phone, address)': 'Клиент (имя, телефон, адрес)',
    'Search (name, phone, address)': 'Поиск (имя, телефон, адрес)',
    'Spread payment': 'Распределить оплату',
    'Spread': 'Распределить',
    'Spread payment from ': 'Распределение оплаты от ',
    'Doing spread...': 'Распределяем...',
    'No sum!': 'Нет суммы',
    'Spreaded ': 'Распределено ',
    ' to order ': ' на заказ ',
    'Rest sum ': 'Остаточная суммма ',
    ' from ': ' от ',
    'What\'s new': 'Информация',
    'Payments': 'Оплаты',
    'Payment': 'Оплата',
    'Clientpayments': 'Оплаты клиентов',
    'Cashboxs': 'Кассы/счета',
    'Cashbox': 'Касса/счет',
    'Fill by debts': 'Заполнить по расчетам',
    'Orders to deliver': 'Заказы к доставке',
    'Show negative sum': 'Показывать отрицательные суммы',
    'Expenses': 'Расходы',
    'Expense': 'Расход',
    'Apply payment': 'Провести платеж',
    'Clients debt ': 'Долг клиента ',
    'Client debt': 'Расчеты с клиентом',
    'Document': 'Документ',
    'Sale': 'Продажа',
    'Cash flow': 'Движение денег',
    'Cashbox/Document': 'Касса/счет / Документ',
    'Login': 'Вход',
    'Registration': 'Регистрация',
    'Register': 'Зарегистрироваться',
    'Forgot your password?': 'Забыли пароль?',
    'Confirm password': 'Подтвердите пароль',
    'Your name': 'Ваше имя',
    'Go to authorization': 'Перейти к авторизации',
    'Password recovery': 'Восстановление пароля',
    'Recover password': 'Восстановить пароль',
    'Your account has been created.': 'Ваш аккаунт создан!',
    'Discount sum': 'Сумма скидки',
    'Agent': 'Агент',
    'Status': 'Статус',
    'New': 'Новый',
    'Assigned': 'Назначен',
    'Completed': 'Завершен',
    'To agent': 'Агенту',
    'Payment to agent': 'Платеж агенту',
    'Unassigned orders': 'Свободные заказы',
    'My orders': 'Мои заказы',
    'Take order': 'Принять заказ',
    'Consist': 'Состав',
    'Money received \nOrder completed': 'Деньги получены\nЗаказ выполнен',
    'Received': 'Получено',
    'Fill by agent': 'Заполнить по агенту',
    'System': 'Система',
    'Agent app': 'Приложение агента',
    'Settings': 'Настройки',
    'Print': 'Печать',
    'Start': 'На начало',
    'Increase': 'Увеличение',
    'Decrease': 'Уменьшение',
    'Details': 'Детали',
    'Card payment': 'Оплата картой',
    'Terminal': 'Терминал',
    'Available to agent': 'Доступен агенту',
    'Order dynamics': 'Динамика заказов',
    'Create': 'Создать',
    'Yesterday': 'Вчера',
    'Today': 'Сегодня',
    'Tomorrow': 'Завтра',
    'Prev week': 'Пред неделя',
    'This week': 'Эта неделя',
    'Next week': 'След неделя',
    'Clients sales': 'Продажи клиенту',
    'Orders count': 'Количество заказов',
    'Orders sum': 'Сумма заказов',
    'Orders average sum': 'Средний чек',
    'Profile': 'Профиль',
    'Your email (username)': 'Ваш email (логин)',
    'Name': 'Имя',
    'Passwords match': 'Пароли совпадают',
    'Passwords do not match': 'Пароли не совпадают',
    'Dashboard': 'Рабочий стол',
    'Price lists': 'Цены',
    'PriceList': 'Прайс-лист',
    'Import': 'Импорт',
    'Entity': 'Справочник',
    'Months count': 'Кол-во месяцев',
    'Pay': 'Оплатить',
    'Your tariff: ': 'Ваш тариф: ',
    '. Ends at: ': '. Заканчивается: ',
    'Search (name or email)': 'Поиск (имя или почта)',
    'All': 'Все',
    'Active': 'Активные',
    'Inactive': 'Неактивный',
    'Manager': 'Менеджер',
    'Limits': 'Ограничения',
    'current month': 'текущий месяц',
    'Account quota exceeded!': 'Квота аккаунта превышена!',
    'Money': 'Деньги',
    'Reports': 'Отчеты',
    'Price types': 'Типы цен',
    'Price type': 'Тип цен',
    'Receipts': 'Поступления',
    'Receipt': 'Поступление',
    'Contractor': 'Контрагент',
    'Product flow': 'Движение товаров',
    'Account balances': 'Учитывать остатки',
    'Company name': 'Название компании',
    'Detail to document': 'Детализировать до документа',
    'User with this e-mail already exist': 'Пользователь с таким e-mail уже существует',
    'Password reset': 'Сброс пароля',
    'Set new password': 'Установить новый пароль',
    'Account activation': 'Активация',
    'Activation code': 'Код активации',
    'Account': 'Учетная запись',
    'Activate': 'Активировать',
    'User inactive!': 'Учетная запись не активирована! Проверьте почту!',
    'Debt flow': 'Взаиморасчеты',
    'Client/Document': 'Клиент/Документ',
    'Client debts': 'Долги клиентов',
    'Product card': 'Карточка товара',
    'Rest: ': 'Остаток: ',
    'Deals': 'Сделки',
    'Deal': 'Сделка',
    'Tasks': 'Задачи',
    'Task': 'Задачa',
    'Triggers': 'Триггеры',
    'Trigger': 'Триггер',
    'Extra fields lists': 'Дополнительные поля',
    'Extra fields  lists': 'Доп. поля',
    'Extra fields list': 'Список дополнительных полей',
    'Entity name': 'Сущность',
    'Fields list': 'Список полей',
    'Condition entity': 'Сущность источник',
    'Condition': 'Условие',
    'Action entity': 'Целевая сущность',
    'Action entity uuid': 'Целевой uuid (необязательно)',
    'Action entity fields': 'Поля целевой сущности',
    'Field': 'Поле',
    'Values': 'Значение',
    'Salesman': 'Специалист по продажам',
    'Contacts': 'Контакты',
    'Contact': 'Контакт',
    'Schemas': 'Схемы',
    'Schema': 'Схема',
    'Steps': 'Шаги',
    'Step': 'Шаг',
    'by': 'от',
    'at': 'из',
    'Do Comment': 'Комментировать',
    'Add Task': 'Добавить задачу',
    'On date': 'На дату',
    'for': 'для',
    'New Deal': 'Новая сделка',
    'List': 'Список',
    'Borad': 'Доска',
    'Order': 'Продажа',
    'Orders': 'Продажи',
    'Sale schemas': 'Схемы продаж',
    'Sale schema': 'Схема продаж',
    'Default schema': 'Схема по умолчанию',
    'Expired': 'Просрочено',
    'Day After Tomorrow': 'Послезавтра',
    'Later': 'Позже',
    'Print templates': 'Шаблоны печати',
    'Print template': 'Шаблон печати',
    'Hide Done': 'Скрыть выполненные',
    'Step index': 'Шаг',
    'Deal closed': 'Сделка закрыта',
    'Hide Closed': 'Скрыть закрытые',
    'Board': 'Доска',
    'Closed': 'Закрыто',
  },
};

export default translate;
