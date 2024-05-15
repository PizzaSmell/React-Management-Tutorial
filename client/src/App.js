import React, { component } from 'react' ;
import './App.css';
import Customer from './components/Customer'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/64/64',
  'name': '진찬권',
  'birthday': '160222',
  'gender': '남자',
  'job': '초등학생'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/64/64',
    'name': '나동빈',
    'birthday': '940302',
    'gender': '남자',
    'job': '공무원'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/64/64',
    'name': '신기술',
    'birthday': '840502',
    'gender': '여자',
    'job': '소방관'
  }
]

class App extends React.Component {
  render() {
    return (
      <Paper sx={{overflowX: "auto"}}>
        <Table stickyHeader sx={{maxWidth: '1080px', minWidth: '1080px'}}>        
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {   //C는 임의의 알파벳으로 커스토머를 의미
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                );
              })
            }
          </TableBody>          
        </Table>        
      </Paper>
    );
  }
}

export default App;
