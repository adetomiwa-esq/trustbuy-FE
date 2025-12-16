import {} from 'react'
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import Button from '../../components/Button/Button';

function HomeIntro() {
  return (
    <section className="home-intro">
        <div className="picture-split">
            <img src={women} alt="" />
            <img src={men} alt="" />

            <h1 className="intro-h">Welcome To TRUST-BUY</h1>

            <div className="store-buttons">
                <Button link='/women' size='md'>
                    SHOP WOMENS
                </Button>

                <Button link='/men' size='md'>
                    SHOP MENS
                </Button>
            </div>
        </div>
    </section>
  )
}

export default HomeIntro