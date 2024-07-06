import {useState,useEffect} from 'react';
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

    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    
    return (
        <div className='menu bg-white shadow-lg rounded-lg p-6 m-4'>
            <h1 className='text-2xl font-bold text-gray-800 mb-2'>{name}</h1>
            <p className='text-gray-600 mb-4'>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2 className='text-xl font-semibold text-gray-800 mb-3'>Menu</h2>
            <ul className='list-disc pl-5'>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id} className='text-gray-700 mb-1'>{item.card.info.name} - <span className='font-semibold'>{"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span></li>
                )) || []}
            </ul>
        </div>
    );
}
export default Menu;