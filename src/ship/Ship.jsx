import { useEffect, useState } from "react";
import ShipDetails from "./ShipDetails";





const Ship = () => {

   const [ship, setShip] = useState([])


   useEffect( ()=> {
      
     fetch('ship.json')
     .then(res=> res.json())
     .then(data => setShip(data))

   } , [])



    return (
        <div className=" mt-10 mb-10 ml-10 mr-10  ">


            <div>
                <h1 className=" text-4xl font-mono text-center mb-10">Ship Information</h1>
            </div>

            
            <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-3 gap-5 ">
             {
               ship.map( ship => <ShipDetails ship={ship}></ShipDetails> )
             }
            </div>

            </div>



            
        </div>
    );
};

export default Ship;