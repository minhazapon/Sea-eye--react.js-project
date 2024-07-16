import { useEffect, useState } from "react";
import Seadetails from "./Seadetails";


const Sea = () => {

    const [sea, setSea] = useState([])

    useEffect( ()=>{
         fetch('sea.json')
         .then(res => res.json())
         .then(data => setSea(data))


    } , [])





    return (
        <div className=" ml-10 mr-10 mt-10 mb-10 flex justify-center bg-slate-100 p-5">


            

           <div className=" grid  md:grid-cols-3 gap-5">


  
             {
                sea.map( sea =>  <Seadetails sea={sea}></Seadetails> )
             }




            
           </div>

            
        </div>
    );
};

export default Sea;