import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Attempting login with userid: ${userid} and password: ${password}`);
        try {
            const response = await fetch('http://<your-ec2-public-ip>:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userid, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                navigate('/customers', { state: { userid } });
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserID:</label>
                    <input 
                        type="text" 
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
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
