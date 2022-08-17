import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BImage from './BImage';
import ShowImage from './ShowImage';

const PImage = () => {
    const [images, setImage] = useState([]);

    const img1 = images.slice(0, 3);
    console.log(img1);
    const img2 = images.slice(3, 5);
    console.log(img2);
    const img3 = images.slice(5, 6);
    console.log(img3);
    const img4 = images.slice(7, 10);


    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = (count = 10) => {
        const accessKey = process.env.REACT_APP_ACCESSKEY;
        fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`)
            .then(res => res.json())
            .then(data => setImage([...images, ...data]))
    }

    return (
        <Container>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2'>
                {img2?.map(image => (
                    <ShowImage url={image.urls.thumb} key={image.id} />
                ))}
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {img1?.map(image => (
                    <ShowImage url={image.urls.thumb} key={image.id} />
                ))}
            </div>

            <div className='row row-cols-1 row-cols-md-1 row-cols-lg-1'>
                {img3?.map(image => (
                    <ShowImage url={image.urls.thumb} key={image.id} />
                ))}
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {img4?.map(image => (
                    <ShowImage url={image.urls.thumb} key={image.id} />
                ))}
            </div>
        </Container>
    );
};

export default PImage;