import {} from 'react'
import "./NewIn.scss"
import { Link } from 'react-router-dom'

interface NewLinks {
    newLinks: {
        img: string;
        link: string;
        title: string;
    }[]
}

function NewIn({newLinks}: NewLinks) {
  return (
    <section id="new-in">
        <h4 className="new-in-h">New in</h4>
        <div className="new-products">
            {
                newLinks.map((x, i) => (
                    <Link to={x.link} key={i} className='new-prod'>
                        <img src={x.img} alt="product-img" />
                        <p>{x.title}</p>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}

export default NewIn