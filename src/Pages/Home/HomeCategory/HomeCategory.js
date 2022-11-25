import { Link } from 'react-router-dom';
import './HomeCategory.css'

const HomeCategory = ({category}) => {
    const {name, img} = category;
    return (
        <div>
            <div className="team-section">
            <div className="teammebmr">
               <div className="team-img" data-nantu={name}>
                <img className='w-80 h-80 rounded-full' src={img} alt="" />
               </div>
               <div className="team-contant mt-2 text-blue-500">
                    <Link className='text-lg font-bold'>{name} <br/> Collections</Link>
               </div>
            </div>
       </div>
        </div>
    );
};

export default HomeCategory;