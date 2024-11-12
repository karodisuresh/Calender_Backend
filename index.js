// server/server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./db/database');
const eventRoutes = require('./routes/event');
const dotenv=require('dotenv');
dotenv.config();
const PORT = 5000;

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/api', eventRoutes);

sequelize.sync({ force: false })  // `force: false` ensures tables are not dropped on restart
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Error syncing database:', err));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
