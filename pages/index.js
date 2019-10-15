import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/footer'

import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const imgStyle = {
    width: "100%"
}

const sliderContainerStyle = {
    background: "gray",
    padding: "30px;"
}

export default function Index() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Nav />


            <div style={sliderContainerStyle}>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-1.jpg" />
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-2.jpg" />
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-3.jpg" />
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-4.jpg" />
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-5.jpg" />
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-6.jpg" />
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="container">
                <h1>Hello Next.js 👋</h1>
                <section id="slider">



                </section>
                <section id="about">
                    <h2>درباره ما</h2>
                </section>
                <section id="lastNews">
                    <h2>آخرین لاگ ها</h2>
                </section>
                <section id="contact">
                    <h2>راه های ارتباطی</h2>
                </section>
            </div>
            <Footer />
        </div>
    )
}