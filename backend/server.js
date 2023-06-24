const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'sql7.freesqldatabase.com',
    user: 'sql7628111',
    password: 'f9mgGKMH63',
    database: 'sql7628111'
});

app.get('/', (re, res)=> {
    return res.json("From Backend Side");
})

app.get('/about_me', (req, res)=> {
    const sql = 'SELECT about_me_text FROM about_me WHERE about_me_id = 1;'
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening");
});