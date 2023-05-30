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
             const [form, setForm] = useState({
               tourForm : 'top-[-2000px]',
               agentForm : 'top-[-2000px]',
             })
             const viewAgentForm = () => {
               setForm({
                  tourForm : 'top-[-2000px]',
                  agentForm : 'top-0',
                })
             }
             const viewtourForm = () => {
               setForm({
                  tourForm : 'top-0',
                  agentForm : 'top-[-2000px]',
                })
             }
            return(
                <HouseContext.Provider value={{viewHouse, houseFeatures}}>
                      {props.children}
                </HouseContext.Provider>
            )
}




