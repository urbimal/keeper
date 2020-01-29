const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();
app.get('/', (req, res) => res.json({ msg: 'blabla' }));
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
