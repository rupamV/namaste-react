import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [itemCards, setItemCards] = useState([]);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.668395094474295&lng=77.18985289335252&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');

        const json = await data.json();
        setResInfo(json.data);

        if (json.data) {
            const cards = json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            setItemCards(cards);
        }
    }

    if(resInfo === null){
        return <Shimmer/>
    }

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;