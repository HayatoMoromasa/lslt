import styled from 'styled-components';
import { useEffect,useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from './const/languages';



const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  border-bottom: 1px solid #e0e0e0;
`
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${ props => props.focused ? '2px solid #f44336' : 'none'};
`


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
    <Header>
      <HeaderUl>
        <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>List</HeaderLi>
        <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>Form</HeaderLi>
      </HeaderUl>
    </Header>
      {
        tab === 'list' ?  <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;
