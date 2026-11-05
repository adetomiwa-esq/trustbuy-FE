import {} from 'react'
import "./AdminSidebar.scss"
import { House, LogOut, ShoppingCart, SquareCheckBig, User } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'

function AdminSidebar() {
    const navigate = useNavigate();
    const logout = () => { localStorage.removeItem("user"); navigate("/login"); };
  return (
    <aside id="admin-aside">
        <div className="sidebar-top">
            <strong>TRUST-BUY</strong><span>Management</span>
        </div>
        
        <ul className="link-list">
            <li className="link-box">
                <NavLink to="/admin" end className="link">
                    <House className="icon" /><span>Overview</span>
                </NavLink>
            </li>

            <li className="link-box">
                <NavLink to="/admin/products" className="link">
                    <SquareCheckBig className="icon" /><span>Products</span>
                </NavLink>
            </li>

            <li className="link-box">
                <NavLink to="/admin/orders" className="link">
                    <ShoppingCart className="icon" /><span>Orders</span>
                </NavLink>
            </li>

            <li className="link-box">
                <NavLink to="/admin/customers" className="link">
                    <User className="icon" /><span>Customers</span>
                </NavLink>
            </li>
        </ul>
        <button className="admin-logout" onClick={logout}><LogOut size={17} /> Sign out</button>
    </aside>
  )
}

export default AdminSidebar