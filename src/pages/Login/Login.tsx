import { Tag, TruckElectric, Waypoints } from 'lucide-react'
import {} from 'react';
import "./Login.scss"

function Login() {
  return (
    <main id="login-page">
        <form action="" className="register-form">
            <h1 className="form-header">Welcome back!</h1>

            <p className="form-intro-p">Enter your details to sign in</p>

            <div className="pecks">
                <div className="adv">
                    <span className='icon'><Tag /></span>
                    <p className="text">Exclusive</p>
                    <p className="text">discounts</p>
                </div>

                <div className="adv">
                    <span className="icon"><Waypoints /></span>
                    <p className="text">Easily tracked</p>
                    <p className="text">deliveries and returns</p>
                </div>

                <div className="adv">
                    <span className="icon"><TruckElectric /></span>
                    <p className="text">Speedy</p>
                    <p className="text">checkout</p>
                </div>
            </div>

            <section className="form-fields">
                <div className="info-field">
                    <label htmlFor="">EMAIL:*</label>
                    <input type="email" name="" placeholder='Please enter email address' id="" />
                </div>

                <div className="info-field">
                    <label htmlFor="">Password:*</label>
                    <input type="password" name="" placeholder='**************' id="" />
                </div>
            </section>

            <button className="submit-btn">REGISTER</button>

            <div className="divide">
                <div className="line"></div>
                <p className="mid-text">Or continue with</p>
                <div className="line"></div>
            </div>
        </form>
    </main>
  )
}

export default Login