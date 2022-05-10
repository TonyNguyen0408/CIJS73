import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([
    [
      {
        "name": "Sarah West",
        "birthday": "2021-05-15T02:24:12.620Z",
        "phone": "(192) 576-8392",
        "zip": "20683",
        "city": "South Chaimmouth",
        "email": "Grant34@gmail.com"
      },
      {
        "name": "Grace Sawayn",
        "birthday": "2022-03-05T23:59:38.292Z",
        "phone": "1-942-997-6198 x56400",
        "zip": "62715",
        "city": "West Gretchen",
        "email": "Jana38@gmail.com"
      },
      {
        "name": "Meta Emard",
        "birthday": "2021-04-19T22:26:23.163Z",
        "phone": "695-844-0471",
        "zip": "01540-7741",
        "city": "Boehmshire",
        "email": "Lina_MacGyver@gmail.com"
      },
      {
        "name": "Antonietta Bernier MD",
        "birthday": "2022-02-04T04:31:22.563Z",
        "phone": "(411) 033-5274 x7050",
        "zip": "06958",
        "city": "Aronside",
        "email": "Pascale94@yahoo.com"
      },
      {
        "name": "Damaris Walker",
        "birthday": "2021-05-25T19:13:54.181Z",
        "phone": "1-882-232-5512 x687",
        "zip": "64151-0281",
        "city": "East Clark",
        "email": "Marcia25@hotmail.com"
      },
      {
        "name": "Kathleen Bergnaum",
        "birthday": "2021-12-10T19:12:54.376Z",
        "phone": "(569) 849-8457 x6316",
        "zip": "58098",
        "city": "North Vincenzo",
        "email": "Loma_Turner@yahoo.com"
      },
      {
        "name": "Eden Zemlak",
        "birthday": "2022-03-13T16:09:02.121Z",
        "phone": "1-662-167-6852",
        "zip": "06357",
        "city": "Maryamfurt",
        "email": "Reinhold.Krajcik@hotmail.com"
      },
      {
        "name": "Kaia Koch",
        "birthday": "2022-02-11T22:15:29.201Z",
        "phone": "(681) 196-4907 x0793",
        "zip": "08331-1141",
        "city": "Kuvalisport",
        "email": "Kale.Dooley91@gmail.com"
      },
      {
        "name": "Adan Jast",
        "birthday": "2021-12-03T09:08:27.441Z",
        "phone": "465-658-8957 x34225",
        "zip": "37449",
        "city": "Lennyville",
        "email": "Gunner_Brakus33@yahoo.com"
      },
      {
        "name": "Roxane Green",
        "birthday": "2022-03-26T02:53:17.756Z",
        "phone": "497.531.0512 x211",
        "zip": "32987-4556",
        "city": "Spinkafort",
        "email": "Zoila_Bashirian@gmail.com"
      }
    ]
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();
    setUsers([JSON.parse(inputValue), ...users]);
  };

  return (
    <div className="App">
      <input type='text' onChange={handleInpitChange} value={inputValue} />
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <p>{`Name: ${user.name}`}</p>
              <p>{`Phonr: ${user.birthday}`}</p>
              <p>{`Phone: ${user.phone}`}</p>
              <p>{`Zip: ${user.zip}`}</p>
              <p>{`City: ${user.city}`}</p>
              <p>{`Email: ${user.email}`}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
