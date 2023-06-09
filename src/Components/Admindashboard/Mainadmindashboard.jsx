import firebase from 'firebase/app';
import 'firebase/storage';
import React, { useEffect, useState } from 'react';

export function ImageComponent() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Create a reference to the folder in Firebase Storage
        const storageRef = firebase.storage().ref('images');

        // Fetch the list of files in the folder
        const res = await storageRef.listAll();

        const urls = [];
        for (const itemRef of res.items) {
          // Get the download URL for each file
          try {
            const url = await itemRef.getDownloadURL();
            urls.push(url);
          } catch (error) {
            console.log(error);
          }
        }
        
        // Set the URLs as the state to display the images
        setImageUrls(urls);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {imageUrls.length > 0 ? (
        imageUrls.map((url) => <img key={url} src={url} alt="Firebase Image" />)
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}
