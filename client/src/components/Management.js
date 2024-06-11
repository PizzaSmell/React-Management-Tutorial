import React, { useEffect, useState } from 'react';
import './Management.css';

const Management = () => {
  const [users, setUsers] = useState([]); // users 상태 변수 선언

  useEffect(() => {
    // 컴포넌트가 마운트될 때 사용자 데이터를 가져옵니다.
    fetch('/api/users')
      .then(response => response.json()) // 응답을 JSON으로 변환합니다.
      .then(data => setUsers(data)); // 가져온 데이터를 users 상태 변수에 설정합니다.
  }, []); // 빈 의존성 배열을 사용하여 이 효과는 한 번만 실행됩니다.

  return (
    <div className="management-container">
      <div className="management-header">
        <h1>User Management</h1> {/* 제목을 표시합니다. */}
      </div>
      <table className="management-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => ( // users 배열을 순회하며 테이블 행을 생성합니다.
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Management;
