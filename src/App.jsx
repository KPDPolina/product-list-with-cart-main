
import './App.css'
import Card from './Card'
import User from './components/User';
import { useCartContext } from "./context";
import { useState, useMemo, useEffect } from 'react';



function App() {
  // const [firstName, setFirstName] = useState('Taylor');
  // const [lastName, setLastName] = useState('Swift');
  const [count, setCount] = useState(0);

  // const [fullName, setFullName] = useState('');
  // let fullName = ''
  // useEffect(() => {
  //   fullName = str(firstName, lastName)
  //   setCount(c => c + 1)
  // }, [firstName, lastName]);

  //const { cards } = useCartContext()
  // const fullName = str(firstName, lastName)
  // const fullName = useMemo(() => str(firstName, lastName), [firstName, lastName]);

  // console.log('rerender')
  const increaseP = (num = 1) => {
    setCount(c => c + 1)
  };


  return (
    <>
      <div>
        <div>
          {count}
          <button onClick={() => increaseP()}>+</button>
          <button onClick={() => setCount(c => c - 1)}>-</button>
          <User count={count} key={count} />
        </div>
        {/* {
          cards.map((product) => <Card key={product.name} card={product} />)
        } */}
      </div>
    </>
  )
}

export default App
