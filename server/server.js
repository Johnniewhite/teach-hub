const express = require('express');
const cors = require('cors');
const sendConfirmationEmailRouter = require('./api/send-confirmation-email');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', sendConfirmationEmailRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));