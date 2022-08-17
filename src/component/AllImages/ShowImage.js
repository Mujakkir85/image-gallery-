import React from 'react';
import { Card } from 'react-bootstrap';

const ShowImage = ({ url }) => {
    return (
        <div className=''>
            <Card className='my-3 shadow-sm p-3 mb-4 bg-body rounded' style={{ width: '100%', height: '90%' }}>
                <Card.Img style={{ height: '350px' }} variant="top" src={url} />
            </Card>
        </div>
    );
};

export default ShowImage;


