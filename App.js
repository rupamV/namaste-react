import React from "react";
import ReactDOM from "react-dom/client";

const Header =() =>{
    return(
    <div className="header">
        <div className="logo"> 
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="logo"
        />
        </div>
        <div className="navbar">
            <ul className="list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)};

const Restcards = (props) =>{
    const {resdata}=props;
    return (
            <div className="cards"> 
            <img className="res-logo"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.cloudinaryImageId}></img>
            <h3>{resdata.name}</h3>
            <h4>{resdata.cuisines.join(", ")}</h4>
            <h4>{resdata.avgRating}</h4>
            <h4>{resdata.costForTwo}</h4>
            <h4>{resdata.sla.deliveryTime+" minutes"}</h4>
            </div>
            
)}
 const resObj=[{
    "id": "47853",
    "name": "The Burger Club",
    "cloudinaryImageId": "x7bcibhxfnrupph6bcft",
    "locality": "Karol Bagh",
    "areaName": "Karol Bagh",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "American",
      "Beverages",
      "Desserts"
    ],
    "avgRating": 4,
    "parentId": "2285",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 46,
      "lastMileTravel": 4.3,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "4.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-04-16 23:58:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },{
    "id": "57204",
    "name": "Oven Story Pizza - Standout Toppings",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/273ab143-70ec-468d-9f57-7c77f835eeeb_57204.JPG",
    "locality": "1St Phase",
    "areaName": "Ashok vihar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4,
    "parentId": "3534",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3.9,
      "serviceability": "SERVICEABLE",
      "slaString": "24-34 mins",
      "lastMileTravelString": "3.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-04-16 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Pizza.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Pizza.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },{
    "id": "57484",
    "name": "Apni Rasoi",
    "cloudinaryImageId": "fzudlrz8curlh8brtx6v",
    "locality": "Kanhaiya Nagar",
    "areaName": "Tri Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "Chinese",
      "Snacks"
    ],
    "avgRating": 3.6,
    "veg": true,
    "parentId": "64",
    "avgRatingString": "3.6",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-04-16 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },{
    "id": "210870",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Inderlok Metro Station",
    "areaName": "Shastri Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Burgers",
      "American"
    ],
    "avgRating": 4.3,
    "parentId": "166",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 2.4,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "2.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-04-17 06:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹139"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },{
    "id": "326429",
    "name": "Punjabi Angithi (Vegorama Group)",
    "cloudinaryImageId": "lgfkquq3npd3r9oiy62b",
    "locality": "Satyawati Colony",
    "areaName": "Ashok vihar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "North Indian",
      "Chinese",
      "Punjabi",
      "Snacks"
    ],
    "avgRating": 4.1,
    "veg": true,
    "parentId": "465050",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-04-16 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
          "description": "Delivery!"
        },
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
              }
            },
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  }]; 

const Body = () =>{
    return(
        <div className="container">
            <div className="searchbar">
                search here
            </div>
            <div className="cardcontainer">
            <Restcards resdata={resObj[0]}/>
            <Restcards resdata={resObj[1]}/>
            <Restcards resdata={resObj[2]}/>
            <Restcards resdata={resObj[3]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            <Restcards resdata={resObj[4]}/>
            </div>  
        </div>
    )
}
const AppBody = () => {
    return(
        <div className="mainapp">
            <Header />
            <Body />
        </div> 
    )
};

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppBody/>);