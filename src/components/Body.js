import Restcards from "./Restcards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listofrestaurants, setListofrestaurants] = useState([]);
    const [filteredres, setfilteredres] = useState([]);
    const [searchtext, setsearchtext] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListofrestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredres(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json);
    }

    if (listofrestaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="container mx-auto px-4">
            <div className="my-4 py-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <input className="border border-solid border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded-md p-2" type="text" value={searchtext} onChange={(e) => { setsearchtext(e.target.value) }} placeholder="Search restaurants..."></input>
                    <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out" onClick={() => {
                        const filteredres = listofrestaurants.filter(
                            (rest) => rest.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setfilteredres(filteredres);
                    }}>Search</button>
                </div>
                <button className="btn px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 ease-in-out" onClick={() => {
                    const filteredlist = listofrestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setfilteredres(filteredlist);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    filteredres.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className=" border border-solid border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition duration-200 hover:scale-105">
                            <Restcards resdata={restaurant} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;