const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 데이터베이스 연결 정보
const db = mysql.createConnection({
    host: 'management-rodem.cx42gsaqw602.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'wlsrudals86!',
    database: 'management_db'
});

// 데이터베이스 연결
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// 로그인 엔드포인트
app.post('/api/login', (req, res) => {
    const { userid, password } = req.body;
    console.log(`Login attempt with userid: ${userid} and password: ${password}`);
    const query = 'SELECT name, team FROM users WHERE userid = ? AND password = ?';
    
    db.query(query, [userid, password], (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).send('Error fetching data');
            return;
        }

        if (results.length > 0) {
            console.log(`Login successful for userid: ${userid}`);
            res.json({ message: 'Login successful', name: results[0].name, team: results[0].team });
        } else {
            console.log(`Login failed for userid: ${userid}`);
            res.status(401).send('Invalid credentials');
        }
    });
});

// 로그인한 사용자의 이름과 팀 정보를 가져오는 엔드포인트
app.get('/api/user-info', (req, res) => {
    const { userid } = req.query;
    const query = 'SELECT name, team FROM users WHERE userid = ?';
    
    db.query(query, [userid], (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).send('Error fetching data');
            return;
        }

        if (results.length > 0) {
            res.json({ name: results[0].name, team: results[0].team });
        } else {
            res.status(404).send('User not found');
        }
    });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
