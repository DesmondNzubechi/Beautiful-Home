import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const UploadForm = () => {
  const [images, setImages] = useState([]); // State variable to store the selected images
  const [metadata, setMetadata] = useState(''); // State variable to store the entered metadata
  const [folderName, setFolderName] = useState(''); // State variable to store the folder name

  const handleImageChange = (e) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files); // Convert FileList to an array of files
      setImages(selectedImages); // Update the images state with the selected files
    }
  };

  const handleMetadataChange = (e) => {
    setMetadata(e.target.value); // Update the metadata state when text is entered
  };

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value); // Update the folder name state when text is entered
  };

  const createFolderIfNotExists = async () => {
    const storageRef = firebase.storage().ref();
    const folderRef = storageRef.child(folderName);

    const folderExists = await folderRef.listAll().then(() => true).catch(() => false);

    if (!folderExists) {
      await folderRef.put(null);
    }
  };

  const uploadImages = async () => {
    await createFolderIfNotExists();

    const storagePromises = images.map((image) => {
      const storageRef = firebase.storage().ref().child(`${folderName}/${image.name}`); // Use the specified folder name
      return storageRef.put(image).then((snapshot) => snapshot.ref.getDownloadURL()); // Upload the image file and get the download URL
    });

    return Promise.all(storagePromises);
  };

  const handleImageUpload = async () => {
    if (images.length > 0 && folderName) {
      try {
        const downloadURLs = await uploadImages();

        const db = firebase.firestore();
        await db.collection('images').add({
          imageUrls: downloadURLs, // Store the array of download URLs in Firestore
          metadata: metadata, // Store the metadata in Firestore
        });

        console.log('Images and metadata uploaded successfully.');
      } catch (error) {
        console.error('Error uploading images and metadata:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      <input type="text" value={folderName} onChange={handleFolderNameChange} placeholder="Enter folder name" />
      <button onClick={handleImageUpload}>Upload Images</button>
      <textarea value={metadata} onChange={handleMetadataChange} placeholder="Enter metadata" />
      <button type="submit">Upload Metadata</button>
    </div>
  );
};

export default UploadForm;












import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const UploadForm = () => {
  const [images, setImages] = useState([]); // State variable to store the selected images
  const [metadata, setMetadata] = useState(''); // State variable to store the entered metadata
  const [folderName, setFolderName] = useState(''); // State variable to store the folder name

  const handleImageChange = (e) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files); // Convert FileList to an array of files
      setImages(selectedImages); // Update the images state with the selected files
    }
  };

  const handleMetadataChange = (e) => {
    setMetadata(e.target.value); // Update the metadata state when text is entered
  };

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value); // Update the folder name state when text is entered
  };

  const createFolderIfNotExists = async () => {
    const storageRef = firebase.storage().ref();
    const folderRef = storageRef.child(folderName);

    const folderExists = await folderRef.listAll().then(() => true).catch(() => false);

    if (!folderExists) {
      await folderRef.put(null);
    }
  };

  const uploadImages = async () => {
    await createFolderIfNotExists();

    const storagePromises = images.map((image) => {
      const storageRef = firebase.storage().ref().child(`${folderName}/${image.name}`); // Use the specified folder name
      return storageRef.put(image).then((snapshot) => snapshot.ref.getDownloadURL()); // Upload the image file and get the download URL
    });

    return Promise.all(storagePromises);
  };

  const handleImageUpload = async () => {
    if (images.length > 0 && folderName) {
      try {
        const downloadURLs = await uploadImages();

        const db = firebase.firestore();
        await db.collection('images').add({
          imageUrls: downloadURLs, // Store the array of download URLs in Firestore
          metadata: metadata, // Store the metadata in Firestore
        });

        console.log('Images and metadata uploaded successfully.');
      } catch (error) {
        console.error('Error uploading images and metadata:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      <input type="text" value={folderName} onChange={handleFolderNameChange} placeholder="Enter folder name" />
      <button onClick={handleImageUpload}>Upload Images</button>
      <textarea value={metadata} onChange={handleMetadataChange} placeholder="Enter metadata" />
      <button type="submit">Upload Metadata</button>
    </div>
  );
};

export default UploadForm;









import React, { useEffect, useState } from 'react';
import firebase from './firebase';

const StorageFolders = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchStorageFolders = async () => {
      try {
        const storageRef = firebase.storage().ref();
        const listResult = await storageRef.listAll();

        const folderSet = new Set();

        listResult.items.forEach((item) => {
          const folders = item.fullPath.split('/').slice(0, -1);
          folders.forEach((folder) => folderSet.add(folder));
        });

        const storageFolders = Array.from(folderSet);

        setFolders(storageFolders);
      } catch (error) {
        console.error('Error retrieving storage folders:', error);
      }
    };

    fetchStorageFolders();
  }, []);

  return (
    <div>
      <h1>Storage Folders</h1>
      <ul>
        {folders.map((folder, index) => (
          <li key={index}>{folder}</li>
        ))}
      </ul>
    </div>
  );
};

export default StorageFolders;
