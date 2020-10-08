# Assistant

Приложение для учета на базе фреймворка KateJS

## Использование в качестве модуля

````
npm install katejs-assistant --save
```` 

`AppServer`
````
import AppAssistant from 'katejs-assistant/lib/AppServer';

...

const AppServer = parent => class Server extends use(parent, AppAssistant) {
  ...
}
````
`AppClient`
````
import AppAssitant from 'katejs-assistant/lib/AppClient';

...

const AppClient = parent => class Client extends use(parent, AppAssitant) {
  ...
}
````

## Установка
````
git clone https://github.com/romannep/assistant.git .
npm install
````

## Запуск

Предварительно необходимо указать параметры сервера
 и соединения с СУБД в `env.json`

При создании базы данных для поддержки кириллицы стоит указать
кодировку `utf8mb4`

Перед началом работы необходимо синхронизировать структуру БД
````
npm run dbsync
````

## Разработка
````
npm run dev-server
npm run dev-client
````

## Настройка
Перед созданием пользователей необходимо создать роли, как минимум
роль с полными правами.

При создании роли с полными правами, необходимо снять флажки с метода
`put` у сущностей `ProductRecord`, `MoneyRecord` и `ВуиеRecord`. 
Эти сущности не создаются непосредтвенно и не нужны в меню.

Также, нужно снять флаг с метода `put` у метода `EntityDescription`
 
Для возможности печати заказа необходимо создать шаблон печати (Print template)
с названием Order и содержимым - html щаблоном с синтаксисом 
[Handlebars](https://handlebarsjs.com/). [Образец](https://raw.githubusercontent.com/romannep/assistant/master/order.html)

## Лицензия
[AGPL-3.0](https://github.com/romannep/assistant/blob/master/LICENSE)
