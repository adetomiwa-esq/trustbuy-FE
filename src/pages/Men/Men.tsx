import {} from 'react'
import Slider from '../../components/Slider/Slider'

function Men() {

    const products = [
  { id: 1, img: "https://images.asos-media.com/products/abercrombie-fitch-wool-blend-herringbone-jacket-in-dark-brown/209845493-1-brown?$n_640w$&wid=513&fit=constrain", description: "Abercrombie & Fitch wool blend herringbone jacket in dark brown", price: "$222.00" },

  { id: 2, img: "https://images.asos-media.com/products/asos-design-harrington-wool-look-jacket-in-brown/208168241-1-brown?$n_640w$&wid=513&fit=constrain", description: "Trust-buy design harrington wool look jacket in brown", price: "$100.00" },

  { id: 3, img: "https://images.asos-media.com/products/cotton-on-long-sleeve-boxy-fit-rugby-polo-in-charcoal-stripe/209681949-1-grey?$n_640w$&wid=513&fit=constrain", description: "Cotton On long sleeve boxy fit rugby polo in charcoal stripe", price: "$72.00" },

  { id: 4, img: "https://images.asos-media.com/products/abercrombie-fitch-oversized-zip-up-shacket-in-black/209607821-1-black?$n_640w$&wid=513&fit=constrain", description: "Abercrombie & Fitch oversized zip up shacket in black", price: "$103.00" },

  { id: 5, img: "https://images.asos-media.com/products/abercrombie-fitch-knitted-quarter-zip-cosy-jumper-in-brown/209608097-1-brown?$n_640w$&wid=513&fit=constrain", description: "Abercrombie & Fitch knitted quarter zip cosy jumper in brown", price: "$103.00" },

  { id: 6, img: "https://images.asos-media.com/products/asos-design-essentials-long-sleeve-polo-in-black-pique/209065741-1-black?$n_640w$&wid=513&fit=constrain", description: "Trust-buy design essentials long sleeve polo in black pique", price: "$27.00" },

  { id: 7, img: "https://images.asos-media.com/products/only-sons-cord-jacket-in-dark-brown/209580415-1-majorbrown?$n_640w$&wid=513&fit=constrain", description: "Only sons cord jacket in dark brown", price: "$79.00" },

  { id: 8, img: "https://images.asos-media.com/products/asos-design-oversized-wool-look-harrington-in-green/209248922-1-green?$n_640w$&wid=513&fit=constrain", description: "Trust-buy design oversized wool look harrington in green", price: "$133.00" },
];

  return (
    <div>
        <Slider
      items={products}
      itemsPerSlide={4}
    />
    </div>
  )
}

export default Men