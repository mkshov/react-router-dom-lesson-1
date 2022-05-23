import React, { useState } from 'react';

const Filters = () => {
    const [selectedTag, setSelectorTag] = useState('all')
    return (
        <div className='container mt-3 mb-3 d-flex justify-content-between'>
            <div>
                <span onClick={() => setSelectorTag('all')} className={selectedTag === 'all' ? "btn btn-dark" : "btn btn-light"}>All</span>
                <span onClick={() => setSelectorTag('men')} className={selectedTag === 'men' ? "btn btn-dark" : "btn btn-light"}>Men</span>
                <span onClick={() => setSelectorTag('woman')} className={selectedTag === 'woman' ? "btn btn-dark" : "btn btn-light"}>Women</span>
                <span onClick={() => setSelectorTag('kids')} className={selectedTag === 'kids' ? "btn btn-dark" : "btn btn-light"}>Kids</span>
            </div>
            <input type="text" placeholder='Search' />
        </div>
    );
};

export default Filters;