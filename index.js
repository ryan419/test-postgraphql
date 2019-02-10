const express = require('express');
const { postgraphile } = require('postgraphile');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('running server'));
app.use('/users', postgraphile('postgres://postgres:postgres@localhost:5432/testdb'));

app.listen(3000, () => console.log('App listening on port 3000!'));
