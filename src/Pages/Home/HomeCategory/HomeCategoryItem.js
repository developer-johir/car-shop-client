import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCategory from './HomeCategory';

const HomeCategoryItem = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
            <div className='max-w-screen-xl mx-auto py-20'>
                <div className="categor-title text-center">
            <h2 className='text-3xl font-bold text-red-600 mb-3'>Top Category</h2>
            <p>We welcome feedback: you can select the flag against a sentence to report it.</p>
            <img className='mx-auto mt-5 mb-10' src="https://i.ibb.co/Mp877Sg/separator-1.png" alt="separator-1"/>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center '>
                {
                    categories.map(category => <Link to={`/category/${category.id}`}>
                        <HomeCategory
                        key={category.id}
                        category={category}
                    ></HomeCategory>
                    </Link>)
                }
            </div>
            </div>
    );
};

export default HomeCategoryItem;