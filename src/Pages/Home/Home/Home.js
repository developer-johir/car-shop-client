import React from 'react';
import HomeCategoryItem from '../HomeCategory/HomeCategoryItem';
import LatestBlog from '../LatestBlog/LatestBlog';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeCategoryItem></HomeCategoryItem>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;