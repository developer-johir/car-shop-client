import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>This is Category: {categoryNews.length}</h1>
            {
                categoryNews.map(product => <p key={product._id}>
                    {product.title}
                    <img className='mx-auto mt-5 mb-10' src={product.image} alt="separator-1"/>
                </p>)
            }
        </div>
    );
};

export default Category;