
import './App.css'
import Card from './Card'
import { useCartContext } from "./context";

function App() {
  const {cards} = useCartContext()

  return (
    <>
      <div>
        {
          cards.map((product)=><Card key={product.name} card={product}/>)
        }
      </div>
    </>
  )
}

export default App
