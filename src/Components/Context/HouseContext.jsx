import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { diffHouses } from "../../Pages/Buy/BuyingHouse";
import { diffRent } from "../../Pages/Rent/RentingHouses";

export const HouseContext = createContext();

export const HousesDetails = (props) => {
             const buyRent = [...diffHouses, ...diffRent];
             const [filteredSearch, setFilteredSearch] = useState([]);
             const [searchedText, setSearchedText] = useState('');
             const [houseFeatures, setHouseFeatures] = useState(JSON.parse(localStorage.getItem('houseFeatures')) || []);
             useEffect(() => {
                localStorage.setItem('houseFeatures', JSON.stringify(houseFeatures))
             }, [houseFeatures]);

             const viewHouse = (property) => {
                setHouseFeatures([property]);
             }
             const getSearch = (e) => {
                   
            const searching = e.target.value;
               if (searching !== '') {
                  const searchResult = buyRent.filter(filtered => (
                     filtered.location.toLocaleLowerCase().includes(searching.toLocaleLowerCase()) || filtered.amount.includes(searching)
                  ));
                  setFilteredSearch(searchResult);
                  setSearchedText(searching);
               } 
               console.log(searching);
               console.log(filteredSearch);
             }
            
             
            return(
                <HouseContext.Provider value={{viewHouse, searchedText, filteredSearch, getSearch, houseFeatures}}>
                      {props.children}
                </HouseContext.Provider>
            )
}




