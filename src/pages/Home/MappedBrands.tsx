import {} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button';

interface Brand {
    brands: {link: string, img: string }[];
    allBrandsLink: string[]
}

function MappedBrands({brands, allBrandsLink} : Brand) {
  return (
    <div className='label-map'>
        <div className="top-labels">
            {
                brands.map((brand, i) => (
                    <Link to={brand.link} key={i}>
                        <img src={brand.img} alt="" />
                    </Link>
                ))
            }
        </div>

        <Button link='' size='lg'>
            {
                allBrandsLink.map((link,i) => (
                    <p key={i}>{link}</p>
                ))
            }
        </Button>
    </div>
  )
}

export default MappedBrands