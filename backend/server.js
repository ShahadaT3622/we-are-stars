const express = require('express');
const cors = require('cors');
const userRouter = require('./api/user');
const talentRouter = require('./api/talent');
require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/talents', talentRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
