import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import LocationCard from "./LocationCard";
import './Home.css';






const locations = [
  {
    price: "₹ 45,000",
    type: "2BHK Apartment for Rent",
    location: "HSR Layout",
    city: "Bengaluru",
    state: "Karnataka",
    postal_code: "560102",
    beds: 2,
    baths: 2,
    furnished: true,
    posted_on: "17 Aug 2023",
    image_url:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/cd24cf5c-6f45-412b-9077-e40b2330b096.jpg",
    details_url: "URL_to_details_page",
  },

  {
    price: "₹ 45,000",
    type: "3BHK Apartment for Rent",
    location: "HSR Layout",
    city: "Bengaluru",
    state: "Maisuru",
    postal_code: "560102",
    beds: 2,
    baths: 2,
    furnished: true,
    posted_on: "17 Aug 2023",
    image_url:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/cd24cf5c-6f45-412b-9077-e40b2330b096.jpg",
    details_url: "URL_to_details_page",
  },
  {
    price: "₹ 45,000",
    type: "2BHK Apartment for Rent",
    location: "HSR Layout",
    city: "Bengaluru",
    state: "Domlur",
    postal_code: "560102",
    beds: 2,
    baths: 2,
    furnished: true,
    posted_on: "17 Aug 2023",
    image_url:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/95ab0f65-8c6a-4984-8df5-e9100c4564cc.png",
    details_url: "URL_to_details_page",
  },
  {
    price: "₹ 45,000",
    type: "2BHK Apartment for Rent",
    location: "HSR Layout",
    city: "Bengaluru",
    state: "Jayanagar",
    postal_code: "560102",
    beds: 2,
    baths: 2,
    furnished: true,
    posted_on: "17 Aug 2023",
    image_url:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/95ab0f65-8c6a-4984-8df5-e9100c4564cc.png",
    details_url: "URL_to_details_page",
  },
  {
    price: "₹ 45,000",
    type: "2BHK Apartment for Rent",
    location: "HSR Layout",
    city: "Bengaluru",
    state: "Koramangala",
    postal_code: "560102",
    beds: 2,
    baths: 2,
    furnished: true,
    posted_on: "17 Aug 2023",
    image_url:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/95ab0f65-8c6a-4984-8df5-e9100c4564cc.png",
    details_url: "URL_to_details_page",
  },
  {
    price: "₹ 48,000",
    type: "3BHK Apartment for PGs",
    location: "HSR Layout",
    city: "Bengaluru",
    state: "Banashankari",
    postal_code: "560102",
    beds: 2,
    baths: 2,
    furnished: true,
    posted_on: "17 Aug 2023",
    image_url:
      "https://s3.ap-south-1.amazonaws.com/zs2.0/PropertyImages/95ab0f65-8c6a-4984-8df5-e9100c4564cc.png",
    details_url: "URL_to_details_page",
  },
];


const Home = () => {
  const [filteredLocations, setFilteredLocations] = useState(locations);
  //const [filteredLocations, setFilteredLocations] = useState(locations);

  const handleSearch = (searchTerm) => {
    const filtered = locations.filter((location) =>
      location.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  const handleCat=(cat)=>{
    const filtered = locations.filter((location) =>
      location.type.toLowerCase().includes(cat.toLowerCase())
      
    );
    setFilteredLocations(filtered);
  }

  const handleClickAll = ()=>{
   // console.log("All")
    const filtered = locations.filter((location) =>
      location.type.toLowerCase()
    );

    
    setFilteredLocations(filtered);
  }

  const handleClick2bhk = ()=>{
    // console.log("All")
     const filtered = locations.filter((location) =>
       location.type.toLowerCase().includes("2bhk")
     );
 
     
     setFilteredLocations(filtered);
   }

   const handleClick3bhk = ()=>{
    // console.log("All")
     const filtered = locations.filter((location) =>
       location.type.toLowerCase().includes("3bhk")
     );
 
     
     setFilteredLocations(filtered);
   }

  
  return (
    <div className="home">
      <HeroSection />
      <SearchBar onSearch={handleSearch} onCatChange={handleCat}   />

<div className="head">
      <h1>Popular Apartment in Bengaluru</h1>
      <div className="spandiv">
      <span> <button onClick={handleClickAll}  >All</button>  </span>  <span>  <button onClick={handleClick2bhk} >2Bhk</button> </span>  <span>  <button  onClick={handleClick3bhk} >3Bhk</button> </span>
      </div>
      </div>


 <div className="cards">
      <div className="location-cards">
      
        {filteredLocations.map((location, index) => (
        
          <LocationCard
            key={index}
            image_url={location.image_url}
            type={location.type}
            price={location.price}
            city={location.city}
            state={location.state}
            postal_code={location.postal_code}
            beds={location.beds}
            baths={location.baths}
            furnished={location.furnished}
            posted_on={location.posted_on}
            details_url={location.details_url}
            location={location.location}
          />
          
        ))}
      </div>
      </div>
     
     
    </div>
  );
};

export default Home;
