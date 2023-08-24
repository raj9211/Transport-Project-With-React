import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from './Firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';


const Vehicle = () => {
    let navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(null);
    // const [imageUrls, setImageUrls] = useState([]);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/");


    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/vehicle");
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imgRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imgRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            })
        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    }, []);



    return (
        <div className='file'>
            <input type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />
            <button onClick={uploadImage}>Upload Vehicle Image</button>
            {imageList.map((url) => {
                return <img src={url} alt='vehicle' />
            })}
        </div>
    )
}


export default Vehicle