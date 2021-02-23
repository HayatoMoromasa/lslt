import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [ tab, setTab ] = useState('list');
  return (
    <div>
    <header>
      <ul>
        <li onClick={() => setTab('list')}>List</li>
        <li onClick={() => setTab('form')}>Form</li>
      </ul>
    </header>
      {
        tab === 'list' ?  <List/> : <Form/>
      }
    </div>
  );
}

export default App;
