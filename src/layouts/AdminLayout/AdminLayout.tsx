import {} from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import "./AdminLayout.scss"

function AdminLayout() {
  return (
    <main id="admin">
      <AdminSidebar />
      <Outlet />
    </main>
  )
}

export default AdminLayout