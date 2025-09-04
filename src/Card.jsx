import { useMemo } from "react";
import { useCartContext } from "./context";

function Card({card}) {
    const {name, price, category, image} = card;
    const {cart, setCart} = useCartContext();
    const count = useMemo(()=>cart[name] === undefined ? 0 : cart[name], [cart]);

    console.log(cart);
    
    function increaseP() {
        setCart((prev)=>{
            debugger;
            if(name in prev){
                prev[name]+=1
            }else{
                prev[name] = 1;
            }
            return structuredClone(prev);
        })
    }

    function decreaseP() {
        setCart((prev)=>{
            if(name in prev){
                prev[name]-=1
            }
            return structuredClone(prev);
        })
    }
    return (
        <div>
            <img src={image.desktop}></img>
            <div>
                {count === 0
                ? <button onClick={increaseP}>Add to cart</button>
                : <div>
                    <button onClick={decreaseP}>-</button>
                    {count}
                    <button onClick={increaseP}>+</button>
                </div>
                }
            </div>
            <div>
                <span>{category}</span>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default Card;