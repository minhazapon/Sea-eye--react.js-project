


const ShipDetails = ({ship}) => {

    const {image, name, company, country, deatils} = ship

    return (
        <div>

            <div className="card card-compact bg-base-100 w-96 h-[500px] shadow-xl">
              <figure>
                <img className=" h-[250px] w-[400px]"
                  src={image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {name} </h2>
                <p>Company: {company} </p>
                <p>Country: {country} </p>
                <p>Details: {deatils} </p>
              </div>
            </div>
            
        </div>
    );
};

export default ShipDetails;