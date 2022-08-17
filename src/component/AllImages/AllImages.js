import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader/Loader';
import ShowImage from './ShowImage';

const AllImages = () => {
    const [images, setImage] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";

        const accessKey = process.env.REACT_APP_ACCESSKEY;

        fetch(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
            .then(res => res.json())
            .then(data => setImage([...images, ...data]))

    }

    return (
        <Container>
            <div>

                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {images.map(image => (
                        <ShowImage url={image.urls.thumb} key={image.id} />
                    ))}
                </div>

                <div>
                    {/* <Loader></Loader> */}
                </div>

                <InfiniteScroll
                    dataLength={images.length}
                    next={fetchImages}
                    hasMore={true}
                    loader={<Loader />}
                ></InfiniteScroll>
            </div >
        </Container>
    );
};

export default AllImages;