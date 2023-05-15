import { sequelize } from "./src/db";
import app from './src/app';
import config from './lib/config';

sequelize.sync({ force: true, logging: false })
  .then(() => {
    console.log('Database synced successfully!');
    app.listen(config.dbPort, () => {
      console.log(`App is listening on port ${config.dbPort}!`);
    });
  })
  .catch((err) => console.error('Error syncing database:', err));

