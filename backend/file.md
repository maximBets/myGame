1. `npm init -y`сделать проект npm проектом
2. `npx eslint --init` подключение eslint
3. `npx gitignore node` создание папки gitignore
4. `npm i express` - установка библеотеки для сервера
5. `npm i sequelize pg pg-hstore` Устанавливаем sequelize
6. `npm i sequelize-cli` Устанавливаем инструменты sequelize для командной строки
7. `.sequelizerc` создаём файл в корне проекта
8. `npx sequelize init`
9. `db/config/database.json` меняем данные для доступа к бд в
10. `npx sequelize db:create` создаём базу данных
11. `npx sequelize model:generate --name Street --attributes street_name:text,city_id:integer` создаём миграции и модели
12. Зайти в миграции и изменить колонки если это необходимо (allowNull, unique, defaultValue).
13. Также прописать связи в миграциях (references, onDelete).
14. Те изменения, которые мы внесли в миграции нужно перенести в модели (и поменять Sequelize на DataTypes).
15. `npx sequelize db:migrate` Применяем миграции, чтобы создать таблицы
    1. `npx sequelize db:migrate:undo:all`\_Если нужно отменить все миграции
16. Прописываем связи между моделями в методы associate моделей
17. `npx sequelize seed:generate --name users` Создаём сидеры (начальные данные либо тестовые данные)
    1. в файле сида импортируем нужные модели из папки `models`
    2. создаём записи через `Model.create` или `Model.bulkCreate`
18. `npx sequelize db:seed:all` Применяем сиды
19. `npm i -D nodemon` - инструмент для перезапуска сервера
20. `npm install @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom`
    установк react и babel

23.`npm i sequelize sequelize-cli pg pg-hstore express dotenv morgan cookie-parser express-session session-file-store bcrypt @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom bootstrap@5.3.0-alpha1 bootstrap-icons`

21. require('@babel/register'); В корень проекта нужно добавить файл “.babelrc” с таким содержимым:
    {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
    //////////////////// настройка .json
22. `"scripts": {
"dbr": "sequelize db:drop && sequelize db:create && sequelize db:migrate && sequelize db:seed:all",
"dev": "nodemon app.js --ext js,json,jsx"
}`
