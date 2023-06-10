import React, { useEffect, useState } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes,  listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../../config/firebase";
import {collection,  getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";


export const AdminDashboard = () => {
  const {newUser, signout, navig} = useContext(HouseContext);
    const [imgFolder, setImgFolder] = useState('');
    const [imgList, setImgList] = useState([]);
    const [selectImgFolder, setSelectImgFolder] = useState('');
     const [newImgs, setNewImgs] = useState([]);
     const [newHouse, setNewHouse] = useState({
      category: '',
      location: '',
      amount: null,
      bed: null,
      bath: null,
      park: null,
      kitchen: null,
      fullDescr: '',
      pictures: [...imgList],

  });
/*
  const getHouseImgFolder = (e) => {

      setSelectImgFolder(e.target.value);
  }
*/


 
     const UploadImg = () => {
      if (newImgs === null || imgFolder === '') return;
        const folderRef = ref(storage, imgFolder);
        listAll(folderRef)
          .then((folderSnapshot) => {
            if (folderSnapshot.items.length === 0) {
              //If folder doesn't exist, create a new folder
              return uploadBytes(folderRef, null);
            }
            return Promise.resolve();
          })
          .then(() => {
            const imgRef = ref(storage, `${imgFolder}/${newImgs.name + v4()}`);
            uploadBytes(imgRef, newImgs);

            listAll(folderRef).then((response) => {
              response.items.forEach(item => {
                  getDownloadURL(item).then(url => {
                      setImgList((prev) => [...prev, url]);
                  })
              })
          
             });
             setNewHouse({...newHouse, pictures: imgList});
            alert('succesfull');
          })
       /*   .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              setImgList((prev) => [...prev, url]);
            });
          })*/
          .catch((error) => {
          
            alert(error.message);
            // Handle error if necessary
          });
      };

      const getImgFolder = () => {
        setSelectImgFolder(imgFolder)
      }

  useEffect(() => {
   if (selectImgFolder == '')return;
        const imageListRef = ref(storage, selectImgFolder);
        listAll(imageListRef).then((response) => {
         response.items.forEach(item => {
             getDownloadURL(item).then(url => {
                 setImgList(url);
             })
         })
       
        })
      }, [])
    const createHouse = async () => {
      if (imgList.length <= 0) {
        alert('Upload Image First');
        return;
    };
   
        if (newHouse.location  === '' ||
             newHouse.bed === null ||
              newHouse.amount === null ||
               newHouse.bath === null ||
                newHouse.park === null ||
                 newHouse.kitchen === null || 
                 newHouse.fullDescr === '' ||
                  newHouse.category === '' ) {
                    alert('make sure you fill in the required field');
            return;
        }
        const houseCollectionRef = collection(db, `${newHouse.category}`);
       
        try {
           await addDoc(houseCollectionRef, {
            location: newHouse.location,
            bed: newHouse.bed,
            amount: newHouse.amount,
            bath: newHouse.bath,
            park: newHouse.park,
            kitchen: newHouse.kitchen,
            fullDescr : newHouse.fullDescr,
            pictures : imgList,
           });
           alert('succesful')
        } catch (error) {
            alert(error)
        }
    }

    return(
    //  !newUser? navig('/login') :
    <div className="py-[100px] relative z-[40] bg-slate-900">
        <h1 className="text-center font-bold uppercase text-white underline md:text-[20px] text-[17px] lg:text-[25px] mb-[60px] ">Upload property information!</h1>
    <div className=" px-[20px]  min-h-[100vh]   items-start gap-5 flex flex-col md:flex-row justify-around">
      
    <div className="  grid md:grid-cols-2 gap-5  w-full ">
   
    {/*   <div>
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="propertyImg">Image Folder:</label>
        <input  onBlur={(e) => getHouseImgFolder(e)} className="bg-slate-100 p-2 border-slate-200 outline-0 border file:border-0 file:bg-transparent rounded w-full " type="text" name="" id="" />
      </div>*/}
      <div className="md:col-span-2  flex gap-2 flex-col">
       <div className="flex flex-row  items-end gap-5">
        <div className="w-full">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="propertyImg">Image:</label>
        <input onChange={(e) => {
                    setNewImgs(e.target.files[0]);
                }} className="bg-slate-100 p-2 border-slate-200 outline-0 border file:border-0 file:bg-transparent rounded w-full " type="file" name="" id="" />
        </div>
        <div className="w-full">
        <label className="text-slate-200  font-semibo uppercase text-150px] " htmlFor="propertyImg">Image Folder:</label>
        <input  onChange={(e) => {
          setImgFolder(e.target.value);
      
          }} className="bg-slate-100 p-2 border-slate-200 outline-0 border file:border-0 file:bg-transparent rounded w-full " placeholder="Input folder name" type="text" name="" id="" />
        </div>
        </div>
        <div className="flex flex-row w-full  items-end gap-5">
        <button onClick={() => {
       UploadImg();
        }} className="bg-green-500 text-slate-900 uppercase p-2 w-full rounded font-bold">Upload image</button>
        <button onClick={() => {
          if (imgFolder == '' || newImgs == null) return;
          setSelectImgFolder(imgFolder);
          console.log(selectImgFolder);
        }} className="border-[2px] border-slate-400 text-slate-50 uppercase p-2 rounded w-full font-bold">Save folder</button>
       </div>
       </div>
       <div className="flex flex-col w-full  items-start gap-0">
    <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="category">Choose Category:</label>
       <select onChange={
        (e) => setNewHouse({...newHouse, category : e.target.value})
        } value={newHouse.category} className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " name="" id="">
       <option  className=" "  >Select Category</option>
        <option value="rent">Rent</option>
        <option value="buy">buy</option>
       </select>
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="location">Property Location:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, location : e.target.value})
        } placeholder="Input Loction..." className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="text" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="amount">Amount:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, amount : e.target.value})
        } placeholder="Input Amount" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="text" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="bedroom">Bedroom:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, bed : e.target.value})
        } className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " placeholder="Input  number of bedroom" type="text" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="bathroom">Bathroom:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, bath : e.target.value})
        } placeholder="Input number of bathroom" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="text" name="" id="" />
       </div>
       <div className="flex flex-col items-start gap-0">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="park">Car Park:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, park : e.target.value})
        } placeholder="Input number of car park" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="text" name="" id="" />
       </div>
       <div className="flex flex-col md:col-span-2 items-start gap-0">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="Kitchen">Kitchen:</label>
        <input onChange={
        (e) => setNewHouse({...newHouse, kitchen : e.target.value})
        } placeholder="Input number of kitchen" className="bg-slate-100 p-2 border-slate-200 outline-0 border rounded w-full " type="text" name="" id="" />
       </div>
    </div>
   
    <div className="flex flex-col w-full  md:h-full items-start gap-0">
        <label className="text-slate-200 font-semibol uppercase text-[15px] " htmlFor="Kitchen">Full Description:</label>
       <textarea onChange={
        (e) => setNewHouse({...newHouse, fullDescr : e.target.value})
        } className="bg-slate-100 p-2 h-[350px] border-slate-200 outline-0 border rounded w-full  " name="" id="" ></textarea>
       <button onClick={createHouse} className="bg-green-500 p-4  text-slate-50 uppercase text-[20px] my-[20px] w-full rounded font-bold">Upload Infomation</button>
       </div>
       {imgList.map(im => {
        return <img src={im} alt="" />
       })}
    </div>
    </div>
   )
}