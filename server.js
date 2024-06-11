require('dotenv').config(); // .env 파일에서 환경 변수를 로드합니다.
const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // CORS 패키지를 불러옵니다.
const app = express();

app.use(cors()); // 모든 요청에 대해 CORS를 허용합니다.

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// 데이터베이스에 연결합니다.
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err); // 데이터베이스 연결 오류를 콘솔에 출력합니다.
        return;
    }
    console.log('Connected to the MySQL server.'); // 데이터베이스 연결 성공 메시지를 콘솔에 출력합니다.

    // 데이터베이스 연결 테스트
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            console.error('Database connection test failed:', err);
        } else {
            console.log('Database connection test successful:', results[0].solution);
        }
    });
});

app.use(express.json()); // JSON 요청 본문을 파싱하기 위한 미들웨어를 설정합니다.

// 로그인 엔드포인트
app.post('/api/login', (req, res) => {
    const { userid, password } = req.body; // 요청 본문에서 userid와 password를 추출합니다.
    const query = 'SELECT * FROM users WHERE userid = ? AND password = ?';

    // 데이터베이스에서 사용자 자격 증명을 조회합니다.
    db.query(query, [userid, password], (err, results) => {
        if (err) {
            console.error('Database error during login:', err); // 쿼리 실행 중 오류 발생 시 콘솔에 출력합니다.
            res.status(500).send({ message: 'Internal server error during login. Please try again later.', error: err }); // 클라이언트에게 오류 메시지를 보냅니다.
            return;
        }

        console.log('Login query results:', results); // 쿼리 결과를 로그에 출력합니다.

        if (results.length > 0) {
            res.send({ message: 'Login successful' }); // 인증 성공 시 성공 메시지를 보냅니다.
        } else {
            console.error(`Invalid credentials for userid: ${userid}`); // 잘못된 자격 증명 메시지를 콘솔에 출력합니다.
            res.status(401).send({ message: 'Invalid credentials. Please check your userid and password.' }); // 클라이언트에게 인증 실패 메시지를 보냅니다.
        }
    });
});

// 로그인한 사용자의 정보 조회 엔드포인트
app.get('/api/user-info', (req, res) => {
    const { userid } = req.query; // 요청 쿼리에서 userid를 추출합니다.
    const query = 'SELECT name, team FROM users WHERE userid = ?';

    // 데이터베이스에서 사용자 정보를 조회합니다.
    db.query(query, [userid], (err, results) => {
        if (err) {
            console.error('Error fetching user info from the database:', err); // 쿼리 실행 중 오류 발생 시 콘솔에 출력합니다.
            res.status(500).send({ message: 'Internal server error while fetching user info. Please try again later.', error: err }); // 클라이언트에게 오류 메시지를 보냅니다.
            return;
        }

        console.log('User info query results:', results); // 쿼리 결과를 로그에 출력합니다.

        if (results.length > 0) {
            res.json({ name: results[0].name, team: results[0].team }); // 사용자 정보를 JSON 형태로 클라이언트에게 보냅니다.
        } else {
            res.status(404).send({ message: 'User not found. Please check the userid.' }); // 사용자를 찾을 수 없을 때 메시지를 보냅니다.
        }
    });
});

// 서버를 시작합니다.
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`); // 서버 시작 메시지를 콘솔에 출력합니다.
});
