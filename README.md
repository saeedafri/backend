sequelize migration:generate --name=create-location
sequelize migration:generate --name=create-user
sequelize migration:generate --name=create-event
sequelize migration:generate --name=create-document
sequelize migration:generate --name=create-document-event
sequelize migration:generate --name=create-guest
sequelize migration:generate --name=create-guest-event
sequelize db:migrate
sequelize db:seed:all
