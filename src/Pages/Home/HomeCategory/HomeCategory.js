import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Spinner from '../../Spinner/Spinner';
import './HomeCategory.css'

const HomeCategory = ({category}) => {
    const {loading} = useContext(AuthContext);
    const {name, img} = category;

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="team-section">
            <div className="teammebmr">
               <div className="team-img" data-nantu={name}>
                <img className='w-80 h-80 rounded-full' src={img} alt="" />
               </div>
               <div className="team-contant text-xl font-bold mt-2 text-blue-500">{name} <br/> Collections
               </div>
            </div>
       </div>
        </div>
    );
};

export default HomeCategory;