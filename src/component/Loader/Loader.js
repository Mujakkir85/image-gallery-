import React from 'react';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div class="spinner-border text-primary" role="status" style={{ width: '80px', height: '80px' }}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;