import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [userid, setUserid] = useState(''); // 사용자 ID 상태
    const [password, setPassword] = useState(''); // 비밀번호 상태
    const navigate = useNavigate(); // 페이지 네비게이션 훅

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 기본 동작 방지

        fetch('http://43.201.170.201:5000/api/login', { // 로그인 API 호출
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userid, password }), // 로그인 정보 전송
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'Login successful') {
                    console.log('Login successful:', userid); // 성공 메시지 로그
                    navigate('/welcome', { state: { userid: userid } }); // 로그인 성공 시 Welcome 페이지로 이동
                } else {
                    alert('Invalid credentials'); // 로그인 실패 시 경고
                }
            })
            .catch((error) => {
                console.error('Error:', error); // 에러 로그 출력
                alert('An error occurred. Please try again.');
            });
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>RODEMFOOD</h2> {/* 제목 */}
                <input
                    type="text"
                    placeholder="Userid"
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)} // 사용자 ID 입력 필드 업데이트
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 필드 업데이트
                />
                <button type="submit">Login</button> {/* 로그인 버튼 */}
            </form>
        </div>
    );
};

export default Login;
