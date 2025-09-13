import { useMemo } from "react";
import { useCartContext } from "./context";
import AddToCart from "./components/AddToCart";

function Card({card}) {
    const {name, price, category, image} = card;
    const {cart, setCart} = useCartContext();
    const count = useMemo(()=>cart[name] === undefined ? 0 : cart[name], [cart]);

    //console.log(cart);
    
    const increaseP = (num=1) => {
    setCart((prevCart) => ({ ...prevCart, [name]: (prevCart[name] || 0) + num }));
    };
    const decreaseP = () => {
    setCart((prevCart) => ({ ...prevCart, [name]: prevCart[name] - 1 }));
    };
    // function increaseP() {
    //     setCart((prev)=>{
    //             const copy = structuredClone(prev);
    //         if(name in copy){
    //             copy[name]+=1
    //         }else{
    //             copy[name] = 1;
    //         }
    //         return copy
    //     })
    // }

    // function decreaseP() {
    //     setCart((prev)=>{
    //         if(name in prev){
    //             prev[name]-=1
    //         }
    //         return structuredClone(prev);
    //     })
    // }
    return (
        <div>
            <img src={image.desktop}></img>
            <div>
                {count === 0
                ? <AddToCart click={increaseP}/>
                : <div>
                    <button onClick={console.log}>-</button>
                    {count}
                    <button onClick={()=>increaseP()}>+</button>
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