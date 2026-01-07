import {} from 'react';
import banner from "../../assets/images/banner-women.jpg"
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <Link to="" className='banner-link'>
        <img src={banner} alt="" className='banner-img' />

        <div className="label">
            <h3>Elegant Dinner Dress</h3>

            <p>SHOP NOW</p>
        </div>
    </Link>
  )
}

export default Banner