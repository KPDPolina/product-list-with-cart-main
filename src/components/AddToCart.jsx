import { useEffect, useState } from "react";

const AddToCart = ({ click }) => {
  const [min, setMin] = useState();

  useEffect(() => {
    console.log("mounted/updated");
    let timer = setInterval(() => {
      console.log("still thinking about amount",min);
      //fetch('.../user/min')
    }, 1000);
    return () => {
      console.log("unmounted",min);
      clearInterval(timer);
    };
  }, [min]);

  return (
    <>
      <section>
        Min:{min} <input value={min} onChange={(e) => setMin(e.target.value)} />
      </section>
      <button onClick={()=>click(+min)}>Add to cart </button>
    </>
  );
};

export default AddToCart;
