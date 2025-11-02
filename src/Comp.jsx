import { memo } from "react";


const Comp = memo(
    ({ name, a }) => {
        console.log('ok')
        return (
            <div>
                {name} has {a}
            </div>
        );
    })


export default Comp
