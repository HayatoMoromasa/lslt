import { useEffect,useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from './const/languages';


function App() {
  const [ tab, setTab ] = useState('list');
  const [ langs, setLangs ] = useState([]);

  useEffect(() => {
    console.log('app.js:useEffect')
    fetchLanguages();
  },[])
  //useEffectは第2引数の配列[]の中の変数に依存し、配列の変数に変更があれば発生する
  //[]空の配列を入れると始めのマウンティングでだけ発生するということになる

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }

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
