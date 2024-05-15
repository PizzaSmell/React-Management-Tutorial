import React, { component } from 'react' ;
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/64/64',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
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
      <div>
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
      </div>
    );
  }
}

export default App;
