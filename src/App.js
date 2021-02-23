import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { Languages } from './const/languages';


function App() {
  const [ tab, setTab ] = useState('list');
  const [ langs, setLangs ] = useState(Languages);

  const addLang = (lang) => {
    setLangs([...langs,lang]);
    setTab('list');
  }

  return (
    <div>
    <header>
      <ul>
        <li onClick={() => setTab('list')}>List</li>
        <li onClick={() => setTab('form')}>Form</li>
      </ul>
    </header>
      {
        tab === 'list' ?  <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;
