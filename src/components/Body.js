import Restcards from "./Restcards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const[listofrestaurants, setListofrestaurants]= useState([]);
    const[filteredres, setfilteredres]= useState([]);
    const[searchtext,setsearchtext]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
       const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.668395094474295&lng=77.18985289335252&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json= await data.json();
       setListofrestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       setfilteredres(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       console.log(json);
    }

    if(listofrestaurants.length===0){
        return <Shimmer/>
    }

    return(
        <div className="container">
            <div className="searchbar">
                <input type="text" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}}></input>
                <button className="btn" onClick={()=>{
                    const filteredres=listofrestaurants.filter(
                        (rest)=>rest.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                    setfilteredres(filteredres);
                }}>Search</button>
            </div>
            <button className="btn" onClick={()=>{
                const filteredlist=listofrestaurants.filter(
                    (res)=>res.avgRating>4
                );
                setListofrestaurants(filteredlist);
            }}>
                filter</button>
            <div className="cardcontainer">
            {
                filteredres.map((restaurant)=>(
                    <Restcards key={restaurant.info.id} resdata={restaurant}/>
                ))
            }
            </div>  
        </div>
    )
}
export default Body;
