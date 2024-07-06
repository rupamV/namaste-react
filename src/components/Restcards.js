import { RES_URL } from "../utils/constants";

const Restcards = (props) => {
  const { resdata } = props;

  return (
    <div className="bg-lightgray w-72 m-4 p-4 box-border flex flex-col items-start justify-between overflow-hidden"> 
      <img 
        className="w-full h-48 object-cover rounded-lg" 
        src={RES_URL + resdata.info.cloudinaryImageId} 
        alt={resdata.info.name}
      />
      <h3 className="text-lg md:font-bold">{resdata.info.name}</h3>
      <h4 className="text-sm">{resdata.info.cuisines.join(", ")}</h4>
      <h4 className="text-md">{resdata.info.avgRating}/5</h4>
      <h4 className="text-md">{resdata.info.costForTwo}</h4>
      <h4 className="text-md">{resdata.info.sla.deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default Restcards;