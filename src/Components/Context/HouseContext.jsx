import React from "react";
import { createContext } from "react";

const HouseContext = createContext();

export const HousesDetails = (props) => {

            return(
                <HouseContext.Provider>
                      {props.children}
                </HouseContext.Provider>
            )
}




