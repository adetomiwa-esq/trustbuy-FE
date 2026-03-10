import {} from 'react'
import "./AdminSidebar.scss"
import { ChartColumnStacked, House, ScrollText, ShoppingCart, SquareCheckBig, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function AdminSidebar() {
  return (
    <aside id="admin-aside">
        <div className="sidebar-top"></div>

        <ul className="link-list">
            <li className="link-box">
                <div className="link">
                    <House className='icon' />
                    <span>Dashboard</span>
                </div>
            </li>

            <li className="link-box">
                <div className="link">
                    <ShoppingCart className='icon' />
                    <span>Orders</span>
                </div>
            </li>

            <li className="link-box">
                <NavLink to="/admin" className="link">
                    <SquareCheckBig className='icon' />
                    <span>Products</span>
                </NavLink>
            </li>

            <li className="link-box">
                <div className="link">
                    <ChartColumnStacked className='icon' />
                    <span>Categories</span>
                </div>
            </li>

            <li className="link-box">
                <div className="link">
                    <User className='icon' />
                    <span>Customers</span>
                </div>
            </li>

            <li className="link-box">
                <div className="link">
                    <ScrollText className='icon' />
                    <span>Reports</span>
                </div>
            </li>
        </ul>
    </aside>
  )
}

export default AdminSidebar