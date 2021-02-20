import { useState } from 'react';
import { List } from "./List";

function App() {
  const [ description, setDescription ] = useState('Before Clicking!');
  const changeDescription = () => {
    setDescription('After Clicking!!');
  }
  return (
    <div>
      <List title={'Favorite Languages'}/>
      <p>{ description }</p>
      <button onClick={ changeDescription }>Button</button>
    </div>
  );
}

export default App;
