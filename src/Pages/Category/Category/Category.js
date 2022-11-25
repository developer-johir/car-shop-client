import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../../Products/Products/Products';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1>This is Category: {categoryNews.length}</h1>
            {
                categoryNews.map(product => <Products 
                    key={product._id}
                    product={product}
                    >
                </Products>)
            }
        </div>
    );
};

export default Category;