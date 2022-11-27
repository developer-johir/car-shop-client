import React from 'react';
import {ImSpinner} from 'react-icons/im'

const Spinner = () => {
    return (
        <div className='h-screen'>
            <ImSpinner className='h-20 w-40 mx-auto text-center text-green-600 animate-spin'></ImSpinner>
            <h4 className='text-gray-500 mx-auto text-center mt-3 ml-5'>Loading...</h4>
        </div>
    );
};

export default Spinner;