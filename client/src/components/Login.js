import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userid, password }),
        });

        if (response.ok) {
            const data = await response.json();
            navigate('/welcome', { state: { name: data.name, team: data.team } });
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>
                    UserID(이름):
                    <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} />
                </label>
                <label>
                    비밀번호:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
