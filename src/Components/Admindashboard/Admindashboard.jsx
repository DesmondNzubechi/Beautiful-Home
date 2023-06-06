import React, { useEffect, useState } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../../config/firebase";
import {collection,  getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
export const ImgUpload = () => {
    
    const [imgList, setImgList] = useState([]);
     const [newImgs, setNewImgs] = useState([]);
     const [imgFolder, setImgFolder] = useState('');
     const imageListRef = ref(storage, `/${imgFolder}`);


     const UploadImg = () => {
          if (newImgs === null) return;
          const imgRef = ref(storage, `${imgFolder}/${newImgs.name + v4()}`);
          uploadBytes(imgRef, newImgs).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(url => {
            setImgList((prev) => [...prev, ])
            })
          })
     }

     
     useEffect(() => {
       listAll(imageListRef).then((response) => {
        response.items.forEach(item => {
            getDownloadURL(item).then(url => {
                setImgList((prev) => [...prev, url]);
            })
        })
        console.log(response)
       })
     }, [])
/*
    return(
        <div>
            <div>
                <input type="text" onChange={(e) => setImgFolder(e.target.valur)} value={imgFolder} />
                <input onChange={(e) => {
                    setNewImg(e.target.files[0]);
                }} type="file" name="" id="" />
                <button onClick={UploadImg}>Upload</button>
            </div>
          {
            imgList.map(url => {
              //  return <img src={url} alt="" />
            })
          }
        </div>
    )
    */
    const  [houses, setHouses] = useState([]);
    const [newHouse, setNewHouse] = useState({
        category: '',
        location: '',
        amount: null,
        bed: null,
        bath: null,
        park: null,
        kitchen: null,
        fullDescr: '',
        pictures: '',
  
    });
   useEffect(() => {
     const getHouses = async () => {
        try {
            const data = await getDocs(houseCollectionRef);
        console.log(data);
        setHouses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        console.log(houses);
        } catch (error) {
            console.log(error);
        }
     };
     getHouses();
    }, []);

    const createHouse = async () => {
        const houseCollectionRef = collection(db, `${newHouse.category}`);
        if (newHouse.location  === '' ||
             newHouse.bed === null ||
              newHouse.amount === null ||
               newHouse.bath === null ||
                newHouse.park === null ||
                 newHouse.kitchen === null || 
                 newHouse.fullDescr === '' ||
                  newHouse.category === '' ) {
            return;
        }
        try {
           await addDoc(houseCollectionRef, {
            location: newHouse.location,
            bed: newHouse.bed,
            amount: newHouse.amount,
            bath: newHouse.bath,
            park: newHouse.park,
            kitchen: newHouse.kitchen,
            fullDescr : newHouse.fullDescr,
           });
           alert('succesful')
        } catch (error) {
            alert(error)
        }
    }

   return(
    <div className=" px-[20px] py-[50px] items-center gap-5 flex flex-col md:flex-row justify-around">
    <div className="  grid md:grid-cols-2 gap-5  w-full ">
    <div className="flex flex-col w-full  items-start gap-0">
    <label className="text-slate-800 font-semibold text-[20px] " htmlFor="category">Choose Category:</label>
       <select onChange={
        (e) => setNewHouse({...newHouse, category : e.target.value})
        } value={newHouse.category} className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " name="" id="">
       <option  className=" "  >Select Category</option>
        <option value="rent">Rent</option>
        <option value="buy">buy</option>
       </select>
       </div>
       <div className="flex flex-row  items-end gap-5">
        <div>
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="propertyImg">Image:</label>
        <input className="bg-slate-100 p-2 border-slate-200 outline-0 border file:border-0 file:bg-transparent rounded w-full " type="file" name="" id="" />
        </div>
        <div>
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="propertyImg">Folder:</label>
        <input onChange={(e) => setImgFolder(e.target.value)} className="bg-slate-100 p-2 border-slate-200 outline-0 border file:border-0 file:bg-transparent rounded w-full " type="text" name="" id="" />
        </div>
        <button className="bg-green-500 p-2 rounded font-bold">Upload</button>
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="location">Property Location:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, location : e.target.value})
        } placeholder="Input Loction..." className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="text" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="amount">Amount:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, amount : e.target.value})
        } placeholder="Input Amount" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="number" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="bedroom">Bedroom:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, bed : e.target.value})
        } className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " placeholder="Input  number of bedroom" type="number" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="bathroom">Bathroom:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, bath : e.target.value})
        } placeholder="Input number of bathroom" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="number" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="park">Car Park:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, park : e.target.value})
        } placeholder="Input number of car park" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="number" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="Kitchen">Kitchen:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, kitchen : e.target.value})
        } placeholder="Input number of kitchen" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="number" name="" id="" />
       </div>
    </div>
   
    <div className="flex flex-col w-full  md:h-full items-start gap-0">
        <label className="text-slate-800 font-semibold text-[20px] " htmlFor="Kitchen">Full Description:</label>
       <textarea onChange={
        (e) => setNewHouse({...newHouse, fullDescr : e.target.value})
        } className="bg-slate-100 p-2 h-[250px] border-slate-200 outline-0 border rounded w-full  " name="" id="" ></textarea>
       <button onClick={createHouse} className="bg-green-500 p-4  text-slate-50 uppercase text-[20px] my-[20px] w-full rounded font-bold">Uploade Infomation</button>
       </div>
   
    </div>
   )
}