import {} from 'react'
import MappedBrands from './MappedBrands'

function BiggestLabels() {

    const femaleBrands = [
        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_02---v3.jpg",
            link: ""
        },

        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_04.jpg",
            link: ""
        },

        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_01v2.jpg",
            link: ""
        },

        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_03.jpg",
            link: ""
        },
    ]

    const maleBrands = [
        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_02---v3.jpg",
            link: ""
        },

        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_01.jpg",
            link: ""
        },

        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_03.jpg",
            link: ""
        },

        {
            img: "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_04.jpg",
            link: ""
        },
    ]
  return (
    <section className="biggest-labels">
        <h1 className="header">The biggest labels</h1>

        <MappedBrands brands={femaleBrands} allBrandsLink={["SHOP WOMEN'S", "BRANDS"]} />

        <MappedBrands brands={maleBrands} allBrandsLink={["SHOP MEN'S", "BRANDS"]} />
    </section>
  )
}

export default BiggestLabels