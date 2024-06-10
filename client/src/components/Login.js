import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Login.css를 가져옵니다.

function Login() {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Attempting login with userid: ${userid} and password: ${password}`);
        try {
            const response = await fetch('http://43.201.170.201:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userid, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                navigate('/welcome', { state: { name: data.name, team: data.team } });
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>RODEMFOOD</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserID(이름):</label>
                    <input 
                        type="text" 
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>비밀번호:</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
