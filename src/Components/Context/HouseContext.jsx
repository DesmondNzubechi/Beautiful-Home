import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { diffHouses } from "../../Pages/Buy/BuyingHouse";
import { diffRent } from "../../Pages/Rent/RentingHouses";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";


export const HouseContext = createContext();

export const HousesDetails = (props) => {






   const navig = useNavigate();

   const signInWithgoogleE = async () => {
       try {
           await signInWithPopup(auth, googleProvider);
          
       } catch (error) {
           console.Console(error);
       }
   }
   const [inputs, setInputs] = useState({
       email: '',
       password: '',
   });

   const [newUser, setNewUser] = useState({});
   onAuthStateChanged(auth, (currentUser) => {
       setNewUser(currentUser)
   })
   const register = async () => {
       
           try {
               const user = await createUserWithEmailAndPassword(auth, inputs.email, inputs.password);
            navig('/dashboard');
           
               console.log(user);
           } catch (error) {
               console.log(error.message)
           }
   }

   const signin = async () => {
       try {
           await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
           navig('/dashboard');
       } catch (error) {
           
       }
   }

   const signout = async () => {
       try {
           await signOut(auth);
           navig('/');
       } catch (error) {
           
       }
   }







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
                <HouseContext.Provider value={{viewHouse, signInWithgoogleE, register, signin, signout, newUser, inputs, setInputs, searchedText, filteredSearch, getSearch, houseFeatures}}>
                      {props.children}
                </HouseContext.Provider>
            )
}




