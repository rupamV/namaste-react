import { RES_URL } from "../utils/constants";

const Restcards = (props) =>{
    const {resdata}=props;
    const stylecard={
    backgroundColor:"lightgray",
};
    return (
            <div className="cards" style={stylecard}> 
            <img className="res-logo"src={RES_URL+resdata.info.cloudinaryImageId}></img>
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating}</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.sla.deliveryTime+" minutes"}</h4>
            </div>
            
)}
export default Restcards;