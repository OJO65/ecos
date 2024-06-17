import React from 'react';
import Wktv from "../Assets/img/anniversary sales/WKtv.jpg";
import Nivea from "../Assets/img/anniversary sales/nivea.jpg";
import Charcoal from "../Assets/img/anniversary sales/charcoal.jpg";
import Ailyons from "../Assets/img/anniversary sales/ailyons.jpg";
import AilyonsKettle from "../Assets/img/anniversary sales/aliyons kettle.jpg";
import Chrome from "../Assets/img/anniversary sales/chrome vodka.jpg";
import Samsungs from "../Assets/img/anniversary sales/samsung galaxy a05.jpg";
import Superfoam from "../Assets/img/anniversary sales/superfoam.jpg";
import Xiomi from "../Assets/img/anniversary sales/xiomi.jpg";
import Vitron from "../Assets/img/anniversary sales/vitron blender.jpg";
import Mouse from "../Assets/img/anniversary sales/reachargeable.jpg";
import VitronTv from "../Assets/img/anniversary sales/vitronhtc.jpg";
import Samsung from "../Assets/img/anniversary sales/samsung galaxy.jpg";
import Garnier from "../Assets/img/anniversary sales/garnier even.jpg";
import BaseProductCarousel from './BaseProductCarousel';

const Carousel4 = ({ redBackground = false }) => {
    const carouselItems = [
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Wktv,
            Name: "WK 32 Inch SmartTv",
            Newprice: "Ksh 9,999",
            Oldprice: "15,500",
            discount: "-35%",
            alt: "Wktv",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Nivea,
            Name: "NIVEA UV Face Conditioner",
            Newprice: "Ksh 849",
            Oldprice: "1,300",
            discount: "-35%",
            alt: "Nivea",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Charcoal,
            Name: "Garnier Charcoal Serum",
            Newprice: "Ksh 2,450",
            Oldprice: "3,700",
            discount: "-34%",
            alt: "Charcoal",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Ailyons,
            Name: "AILYONS SmartTv 32 Inch",
            Newprice: "Ksh 10,649",
            Oldprice: "10,999",
            discount: "-44%",
            alt: "Ailyons",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: AilyonsKettle,
            Name: "AILYONS Electric Kettle",
            Newprice: "Ksh 599",
            Oldprice: "628",
            discount: "-5%",
            alt: "kettle",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Chrome,
            Name: "Chrome Vodka",
            Newprice: "Ksh 699",
            Oldprice: "750",
            discount: "-7%",
            alt: "vodka",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Samsung,
            Name: "Samsung Galaxy A05",
            Newprice: "Ksh 11,799",
            Oldprice: "13,000",
            discount: "-9%",
            alt: "Phone",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Superfoam,
            Name: "Superfoam Luxury White",
            Newprice: "Ksh 299",
            Oldprice: "962",
            discount: "-69%",
            alt: "superfoam",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Xiomi,
            Name: "Xiomi Redmi A3",
            Newprice: "Ksh 10,600",
            Oldprice: "12,500",
            discount: "-15%",
            alt: "Phone",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Vitron,
            Name: "Vitron Blender",
            Newprice: "Ksh 1,685",
            Oldprice: "2,999",
            discount: "-44%",
            alt: "blender",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Ailyons,
            Name: "Ailyons cooker",
            Newprice: "Ksh 3,700",
            Oldprice: "4,000",
            discount: "-8%",
            alt: "cooker",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Mouse,
            Name: "RichRipple Mouse",
            Newprice: "Ksh 419",
            Oldprice: "734",
            discount: "-43%",
            alt: "Mouse",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: VitronTv,
            Name: "Vitron SmartTv",
            Newprice: "Ksh 11,685",
            Oldprice: "18,069",
            discount: "-35%",
            alt: "Tv",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Samsungs,
            Name: "Samsung Phone",
            Newprice: "Ksh 12,400",
            Oldprice: "16,000",
            discount: "-16%",
            alt: "Phone",
        },
        {
            href: "https://www.jumia.co.ke/",
            imgSrc: Garnier,
            Name: "Garnier Even",
            Newprice: "Ksh 1,200",
            Oldprice: "1750",
            discount: "-35%",
            alt: "Garnier",
        },
    ];

    const renderItem = (item) => (
        <a className="block rounded-lg hover:shadow-lg" href={item.href} data-track-onclick="eecPromo">
            <div className="aspect-w-1 shadow-lg aspect-h-1 w-[193.33px] relative">
                <img className="rounded-lg object-cover" src={item.imgSrc} alt={item.alt} />
                <span className="absolute -top-3 ml-40 text-red-600 bg-slate-200">{item.discount}</span>
            </div>
            <div className="text-left mt-2">
                <p className="text-md text-gray-600">{item.Name}</p>
                <p className="text-md text-gray-600 font-bold">{item.Newprice}</p>
                <p className="text-sm text-gray-400 line-through">{item.Oldprice}</p>
            </div>
        </a>
    );

    return (
        <BaseProductCarousel
            title="12th Anniversary Deals | Clearance"
            link="https://www.jumia.co.ke/"
            items={carouselItems}
            itemRenderer={renderItem}
            redBackground={false}
        />
    );
};

export default Carousel4;
