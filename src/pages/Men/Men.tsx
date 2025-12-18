import {} from 'react'
import Slider from '../../components/Slider/Slider'
import Banner from './Banner';
import "./Men.scss"
import NewIn from '../../components/NewIn/NewIn';

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

    const products2 = [
  { id: 1, img: "https://images.asos-media.com/products/jack-jones-hooded-puffer-in-off-white/208949982-1-moonbeam?$n_640w$&wid=513&fit=constrain", description: "Jack jones hooded puffer in off white", price: "$41.06" },

  { id: 2, img: "https://images.asos-media.com/products/columbia-steens-mountain-half-zip-fleece-in-charcoal/208338492-1-charcoal?$n_640w$&wid=513&fit=constrain", description: "Columbia Steens Mountain half zip fleece in charcoal", price: "$56.85" },

  { id: 3, img: "https://images.asos-media.com/products/jack-jones-eddie-baggy-jeans-in-blue/208949387-1-bluedenim?$n_640w$&wid=513&fit=constrain", description: "Jack & Jones Eddie baggy jeans in blue", price: "$44.21" },

  { id: 4, img: "https://images.asos-media.com/products/adidas-originals-disco-samba-og-trainers-in-silver-glitter-exclusive-at-asos/208677992-1-silver?$n_640w$&wid=513&fit=constrain", description: "Adidas Originals Disco samba OG trainers in silver glitter exclusive at asos", price: "$99.48" },

  { id: 5, img: "https://images.asos-media.com/products/jack-jones-hooded-puffer-jacket-in-grey/209007251-1-castlerock?$n_640w$&wid=513&fit=constrain", description: "Jack & Jones hooded puffer jacket in grey", price: "$44.21" },

  { id: 6, img: "https://images.asos-media.com/products/dickies-denim-tote-bag-in-dark-blue/208016759-1-darkblue?$n_640w$&wid=513&fit=constrain", description: "Dickies denim tote bag in dark blue", price: "$50.22" },

  { id: 7, img: "https://images.asos-media.com/products/asos-design-oversized-knitted-cable-crew-neck-jumper-in-oatmeal/208008656-1-oatmeal?$n_640w$&wid=513&fit=constrain", description: "ASOS DESIGN oversized knitted cable crew neck jumper in oatmeal", price: "$42.64" },

  { id: 8, img: "https://images.asos-media.com/products/asos-design-premium-heavyweight-relaxed-jogger-in-400gsm-in-charcoal/208442017-1-obsidian?$n_640w$&wid=513&fit=constrain", description: "ASOS DESIGN premium heavyweight relaxed jogger in 400gsm in charcoal", price: "$53.00" },
];

const newLinks = [
    {
        img: "https://content.asos-media.com/-/media/homepages/mw/2025/december/15-mena-apac-row-ie/features/149110222-cw.jpg",
        title: "Cold-weather shop",
        link: ""
    },

    {
        img: "https://content.asos-media.com/-/media/homepages/mw/2025/december/15-mena-apac-row-ie/features/148031242-new-in.jpg",
        title: "The latest drops",
        link: ""
    },

    {
        img: "https://content.asos-media.com/-/media/homepages/mw/2025/december/15-mena-apac-row-ie/features/148487299-trainers.jpg",
        title: "Trainers",
        link: ""
    },

    {
        img: "https://content.asos-media.com/-/media/homepages/mw/2025/december/15-mena-apac-row-ie/features/148378709-gifting.jpg",
        title: "Gifting",
        link: ""
    },
]

  return (
    <div id='page-men'>
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

export default Men