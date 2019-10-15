import Head from 'next/head';
import Slider from "react-slick";

import WebsiteLayout from '../components/websiteLayout';


var settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const imgStyle = {
    width: "100%"
}

const sliderContainerStyle = {
    background: "gray",
    padding: "30px"
}

const sliderTxt = {
    textAlign: "center",
    color: "white",
    margin: "1rem"
}


const Index = () =>
    (
        <WebsiteLayout>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>


            <div style={sliderContainerStyle}>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-0.jpg" />
                            <h2 style={sliderTxt}>آشنایی با توزیع‌های مختلف لینوکس</h2>
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-1.jpg" />
                            <h2 style={sliderTxt}>ارائه مطالب هفتگی</h2>
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-2.jpg" />
                            <h2 style={sliderTxt}>جشن انتشار</h2>
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-3.jpg" />
                            <h2 style={sliderTxt}>بحث و گفتگوی خودمانی</h2>
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-4.jpg" />
                            <h2 style={sliderTxt}>آموزش دستورات مختلف لینوکس </h2>
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-5.jpg" />
                            <h2 style={sliderTxt}>آموزش و راهنمایی نصب توزیع عا و بسته های نرم افزاری</h2>
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-6.jpg" />
                            <h2 style={sliderTxt}>دستکاری و رفع اشکال برنامه ها و سخت افزار ها</h2>
                        </div>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-7.jpg" />
                            <h2 style={sliderTxt}>جستجو و یادگیری در حوزه های مختلف</h2>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="container">

                <section id="about">
                    <h2>درباره ما</h2>
                </section>
                <section id="lastNews">
                    <h2>آخرین لاگ ها</h2>
                </section>
                <section id="contact">
                    <h2>راه های ارتباطی</h2>
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

        </WebsiteLayout>
    );

export default Index;