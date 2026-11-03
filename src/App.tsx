import { useEffect } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { useAppSelector } from './hooks/redux';

function CartPersistence() {
  const items = useAppSelector(state => state.cart.items);
  useEffect(() => { localStorage.setItem("trust-buy-cart", JSON.stringify(items)); }, [items]);
  return null;
}

function App() {

  return (
    <>
      <CartPersistence />
      <RouterProvider router={router} />
    </>
  )
}

export default App
