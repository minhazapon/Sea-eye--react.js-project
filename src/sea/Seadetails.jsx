

const Seadetails = ({sea}) => {
    
    const {image, name, location, deatils} = sea

    return (

        <div>
           
             <div className="card card-compact bg-base-100 w-96 h-[500px] shadow-xl">
              <figure>
                <img className=" h-[250px] w-[400px]"
                  src={image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Location: {location}</p>
                <p>{deatils}</p>
              </div>
            </div>




            
        </div>
    );
};

export default Seadetails;