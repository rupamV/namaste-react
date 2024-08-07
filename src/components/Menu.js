import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`);
            const json = await response.json();

            // Log the entire response to understand its structure
            console.log('API Response:', json);

            // Extract restaurant info
            const restaurantInfo = json.data?.cards[2]?.card?.card?.info;
            setResInfo(restaurantInfo);

            // Extract menu items from the correct section
            const menuSections = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const items = menuSections?.flatMap(section => section.card?.card?.itemCards || []) || [];

            // Log extracted menu items
            console.log('Menu Items:', items);

            setMenuItems(items);

        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    const { name, cuisines = [], costForTwoMessage } = resInfo ?? {};

    return (
        <div className='menu bg-gray-100 shadow-lg rounded-lg p-8 m-6'>
            <div className='mb-6'>
                <h1 className='text-3xl font-bold text-gray-800'>{name}</h1>
                <p className='text-gray-600 text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
            </div>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Menu</h2>
            <div className="overflow-y-auto max-h-96">
                <ul>
                    {menuItems.length > 0 ? (
                        menuItems.map((item, index) => (
                            item.card && item.card.info ? (
                                <div className="flex items-center border-b border-gray-200 p-4 bg-white shadow-md mb-2 rounded-lg" key={item.card.info.id}>
                                    <img 
                                        src={item.card.info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}` : 'https://via.placeholder.com/100'} 
                                        alt={item.card.info.name} 
                                        className="h-24 w-24 object-cover border border-gray-300 rounded-lg"
                                    />
                                    <div className="ml-4 flex-1">
                                        <h3 className="text-xl font-semibold text-gray-700">{item.card.info.name}</h3>
                                        <p className="text-gray-500">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                                    </div>
                                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                                        + Add
                                    </button>
                                </div>
                            ) : (
                                <div key={index} className="border-b border-gray-200 p-4 bg-white shadow-md mb-2 rounded-lg">
                                    <p className="text-gray-700">Item information is missing</p>
                                </div>
                            )
                        ))
                    ) : (
                        <p className="text-gray-700">No menu items available</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Menu;
