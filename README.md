sequelize migration:generate --name=create-location
sequelize migration:generate --name=create-user
sequelize migration:generate --name=create-event
sequelize migration:generate --name=create-document
sequelize migration:generate --name=create-document-event
sequelize migration:generate --name=create-guest
sequelize migration:generate --name=create-guest-event
sequelize db:migrate
sequelize db:seed:all

Your account number is: 902989

Your new database is now ready to use.

To connect to your database use these details;

Host: sql6.freesqldatabase.com
Database name: sql6704589
Database user: sql6704589
Database password: rN9Y23r1Ah
Port number: 3306
