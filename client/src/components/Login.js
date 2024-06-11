import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate를 사용합니다.
import './Login.css'; // 기존 CSS 파일을 불러옵니다.

const Login = () => {
  const [userid, setUserid] = useState(''); // userid 상태 변수
  const [password, setPassword] = useState(''); // password 상태 변수
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  // 로그인 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 방지합니다.

    // 로그인 API 요청
    const response = await fetch('http://43.201.170.201:3000/api/login', { // 서버 IP 주소를 사용합니다.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid, password }),
    });

    if (response.ok) {
      navigate('/management'); // 로그인 성공 시 관리 페이지로 이동합니다.
    } else {
      alert('Login failed'); // 로그인 실패 시 알림 메시지를 표시합니다.
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
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
