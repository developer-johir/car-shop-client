import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex justify-center py-14'>
            <div className='text-center'>
                <h2 className='text-7xl font-bold'>Oops!</h2>
                <img className='py-14' src="https://tourx-react.b-cdn.net/static/media/404.16338b63.png" alt="" />
                <h2 className='text-5xl font-bold'>That Page Is Not Found.</h2>
                <Link to='/'>
              <button className="btn btn-primary mt-10">GO TO HOME</button>
            </Link>
            </div>
        </div>
    );
};

export default Error;