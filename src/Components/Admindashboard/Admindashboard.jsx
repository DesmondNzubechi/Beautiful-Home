/*import React, { useEffect, useState } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../../config/firebase";
import {collection, doc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
export const ImgUpload = () => {
    /*
    const [imgList, setImgList] = useState([]);
     const [newImg, setNewImg] = useState(null);
     const imageListRef = ref(storage, '/images');
     const UploadImg = () => {
          if (newImg === null) return;
          const imgRef = ref(storage, `images/${newImg.name + v4()}`);
          uploadBytes(imgRef, newImg).then((snapshot) => {
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

    return(
        <div>
            <div>
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
    
    const  [houses, setHouses] = useState([]);
    const houseCollectionRef = collection(db, 'lekki');
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

    const [newHouse, setNewHouse] = useState({
        location: '',
        amount: '',
        bed: '',
        bath: '',
        park: '',
        kitchen: '',
        fullDescr: '',
        pictures: '',
  
    })

    const createHouse = async () => {
        try {
           await addDoc(houseCollectionRef, {
            location: newHouse.location,
            bed: newHouse.bed,
           })
        } catch (error) {
            
        }
    }

   return(
    <div className="flex flex-col gap5 bg-slate-900">
        <input value={newHouse.location} onChange={(e) => setNewHouse({...newHouse, location:e.target.value}) } type="text" name="" id="" />
        <input value={newHouse.amount} onChange={(e) => setNewHouse({...newHouse, amount:e.target.value}) } type="number" name="" id="" /> 
        <input value={newHouse.bed} onChange={(e) => setNewHouse({...newHouse, bed:e.target.value}) } type="text" name="" id="" />
        <input value={newHouse.bath} onChange={(e) => setNewHouse({...newHouse, bath:e.target.value}) } type="text" name="" id="" />
        <input value={newHouse.park} onChange={(e) => setNewHouse({...newHouse, park:e.target.value}) } type="text" name="" id="" />
        <input value={newHouse.kitchen} onChange={(e) => setNewHouse({...newHouse, kitchen:e.target.value}) } type="text" name="" id="" />
        <input value={newHouse.fullDescr} onChange={(e) => setNewHouse({...newHouse, fullDescr:e.target.value}) } type="text" name="" id="" />
        <input value={newHouse.pictures} onChange={(e) => setNewHouse({...newHouse, pictures:e.target.value}) } type="text" name="" id="" />
        <button onClick={createHouse}>Create</button>
    {houses.map(house => {
        return <div>
            <p>{house.location}</p>
        </div>
    })}
    </div>
   )
}*/