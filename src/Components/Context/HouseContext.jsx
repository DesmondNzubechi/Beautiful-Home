import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const HouseContext = createContext();

export const HousesDetails = (props) => {
 
             const [houseFeatures, setHouseFeatures] = useState(JSON.parse(localStorage.getItem('houseFeatures')) || []);
             useEffect(() => {
                localStorage.setItem('houseFeatures', JSON.stringify(houseFeatures))
             }, [houseFeatures]);

             const viewHouse = (property) => {
                setHouseFeatures([property]);
             }
             console.log(houseFeatures);
            return(
                <HouseContext.Provider value={{viewHouse, houseFeatures}}>
                      {props.children}
                </HouseContext.Provider>
            )
}




