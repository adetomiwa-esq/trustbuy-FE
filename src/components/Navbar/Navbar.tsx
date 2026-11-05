import {} from 'react'
import "./Navbar.scss";
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import Button from '../Button/Button';
import { useAppSelector } from '../../hooks/redux';
import { selectCartCount } from '../../features/cart/selectors';

function Navbar() {
  const cartCount = useAppSelector(selectCartCount);
  return (
    <header id="header">
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="logo-img" className='logo' />
            </div>
            <Link to="" className='cat-link'>WOMEN</Link>
            <Link to="" className='cat-link'>MEN</Link>

            <div className="nav-right">
                <div className="search-box">
                    <input type="text" name="" id="" />
                </div>

                <div className="icons">
                    <i><FaRegUser /></i>
                    <i><FaRegHeart /></i>
                    <Link to="/cart" aria-label="Shopping cart" className="cart-nav-icon"><IoBagOutline />{cartCount > 0 && <span>{cartCount}</span>}</Link>
                </div>
            </div>
        </nav>
        <div className="header-btm">
            <Button link='/women' size='sm' >
                <span>WOMEN</span>
            </Button>

            <div className="center">
                <p>25% off 1000s of styles* <br />
With code: SAVINGS</p>
            </div>

            <Button link='/men' size='sm' >
                <span>MEN</span>
            </Button>
        </div>
    </header>
  )
}

export default Navbar