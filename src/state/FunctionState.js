import { useState } from "react";



// function FunctionState(){
//     const [count, setCount] = useState(0);


//     return <div>
//             Hellow Sonu
//             <h1> Hello { count }  </h1>
//                 <button onClick={ () => setCount(count +1) }  > Click Here </button>
//         </div>
    
// }


function FunctionState(){
    const [drint, setDrink] = useState("Tea");


    return <div>
            Hellow Sonu
            <h1> Hello { drint }  </h1>
                <button onClick={ () => setDrink('Pepshi') }  > Click Here </button>
        </div>
    
}

export default FunctionState