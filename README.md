# Assistant

Приложение для учета на базе фреймворка KateJS

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

## Сборка
````
npm run build-client
npm run build-server
````
Запуск сборки
````
npm run ./lib/server-node.js
````

## Лицензия
[AGPL-3.0](https://github.com/romannep/assistant/blob/master/LICENSE)
