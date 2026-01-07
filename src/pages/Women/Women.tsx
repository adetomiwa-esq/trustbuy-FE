import {} from 'react'
import Slider from '../../components/Slider/Slider'
import Banner from './Banner';
import "./Women.scss"
import NewIn from '../../components/NewIn/NewIn';

function Women() {

    const products = [
  { id: 1, img: "https://images.asos-media.com/products/asos-design-wool-blend-textured-jacket-with-collar-in-herringbone/208710539-1-herringbone?$n_640w$&wid=513&fit=constrain", description: "ASOS DESIGN wool blend textured jacket with collar in herringbone", price: "$105.00" },

  { id: 2, img: "https://images.asos-media.com/products/asos-design-off-shoulder-twist-midi-dress-with-long-sleeves-in-black/206674951-1-black?$n_640w$&wid=513&fit=constrain", description: "TRUST-BUY DESIGN off shoulder twist midi dress with long sleeves in black", price: "$14.37" },

  { id: 3, img: "https://images.asos-media.com/products/asos-design-a-line-circle-maxi-skirt-in-camel/209625666-1-camel?$n_640w$&wid=513&fit=constrain", description: "TRUST-BUY DESIGN a line circle maxi skirt in camel", price: "$72.00" },

  { id: 4, img: "https://images.asos-media.com/products/adidas-originals-satin-firebird-disco-track-top-in-navy-and-glitter-exclusive-at-asos/208945209-1-nightindigo?$n_640w$&wid=513&fit=constrain", description: "adidas Originals satin firebird disco track top in navy and glitter exclusive at TRUST-BUY", price: "$203.00" },

  { id: 5, img: "https://images.asos-media.com/products/columbia-brushy-bay-half-zip-fleece-in-twilight-purple/208534462-1-purple?$n_640w$&wid=513&fit=constrain", description: "Columbia Brushy Bay half zip fleece in twilight purple", price: "$47.37" },

  { id: 6, img: "https://images.asos-media.com/products/asos-design-oversized-shirt-in-stripe-in-green-stripe/208792773-1-greenstripe?$n_640w$&wid=513&fit=constrain", description: "TRUST-BUY DESIGN  oversized shirt in stripe in green stripe", price: "$28.42" },

  { id: 7, img: "https://images.asos-media.com/products/collusion-faux-shearling-jacket-with-contrast-suedette-collar/208883940-1-cream?$n_640w$&wid=513&fit=constrain", description: "collusion faux shearling jacket with contrast suedette collar", price: "$46.01" },

  { id: 8, img: "https://images.asos-media.com/products/miss-selfridge-velvet-and-lace-cape-in-black/208904009-1-black?$n_640w$&wid=513&fit=constrain", description: "Miss Selfridge Velvet and lace cape in black", price: "$59.67" },
];

    const products2 = [
  { id: 1, img: "https://images.asos-media.com/products/4505-high-waist-woven-running-short-with-zip-phone-pocket-in-knockout-pink/209455616-1-knockoutpink?$n_640w$&wid=513&fit=constrain", description: "4505 high waist woven running short with zip phone pocket in knockout pink", price: "$42.00" },

  { id: 2, img: "https://images.asos-media.com/products/4505-active-quick-dry-running-zip-up-romper-with-zip-phone-pocket-and-back-vent-in-black/209455237-1-black?$n_640w$&wid=513&fit=constrain", description: "4505 active quick dry running zip up romper with zip phone pocket and back vent in black", price: "$64.00" },

  { id: 3, img: "https://images.asos-media.com/products/4505-seamless-baby-rib-racer-back-romper-with-adjustable-straps-and-inner-bra-in-raisin/209583430-1-raisin?$n_640w$&wid=513&fit=constrain", description: "4505 seamless baby rib racer back romper with adjustable straps and inner bra in raisin", price: "$51.00" },

  { id: 4, img: "https://images.asos-media.com/products/4505-icon-active-zip-up-sculpting-long-sleeve-jacket-with-zip-pockets-in-blackberry/209561767-1-blackberry?$n_640w$&wid=513&fit=constrain", description: "4505 icon active zip up sculpting long sleeve jacket with zip pockets in blackberry", price: "$59.00" },

  { id: 5, img: "https://images.asos-media.com/products/4505-active-square-cap-sleeve-top-in-cherry-red/209455114-1-cherryred?$n_640w$&wid=513&fit=constrain", description: "4505 active square cap sleeve top in cherry red", price: "$34.00" },

  { id: 6, img: "https://images.asos-media.com/products/4505-icon-active-bum-sculpt-high-waist-gym-legging-with-inner-pocket-in-blackberry/209557368-1-blackberry?$n_640w$&wid=513&fit=constrain", description: "4505 icon active bum sculpt high waist gym legging with inner pocket in blackberry", price: "$38.00" },

  { id: 7, img: "https://images.asos-media.com/products/sweaty-betty-ultimate-studio-7-8-leggings-in-brown-leopard-print/209973889-1-brownleopardprint?$n_640w$&wid=513&fit=constrain", description: "Sweaty betty ultimate studio 7/8 Leggings in brown leopard print", price: "$127.00" },

  { id: 8, img: "https://images.asos-media.com/products/sweaty-betty-power-6-legging-shorts-in-black/209973595-1-black?$n_640w$&wid=513&fit=constrain", description: "Sweaty betty power 6 legging shorts in black", price: "$95.00" },
];

const newLinks = [
    {
        img: "https://content.asos-media.com/-/media/homepages/unisex/homepages/2025/december/row-prime/hp-wk-18/ww/147904630-ww-new-in.jpg",
        title: "The latest drops",
        link: ""
    },

    {
        img: "https://content.asos-media.com/-/media/homepages/unisex/homepages/2025/december/row-prime/hp-wk-18/ww/134314031-ww-basics.jpg",
        title: "Back to Basics",
        link: ""
    },

    {
        img: "https://content.asos-media.com/-/media/homepages/unisex/homepages/2025/december/row-prime/hp-wk-18/ww/149730134-ww-knitwear.jpg",
        title: "Knitwear",
        link: ""
    },

    {
        img: "https://content.asos-media.com/-/media/homepages/unisex/homepages/2025/december/row-prime/hp-wk-18/ww/132606239-ww-face--body.jpg",
        title: "Face & Body",
        link: ""
    },
]

  return (
    <div id='page-women'>
        <Banner />
        <Slider
            items={products}
            itemsPerSlide={4}
        />

        <NewIn newLinks={newLinks} />

        <Slider
            items={products2}
            itemsPerSlide={4}
        />
    </div>
  )
}

export default Women