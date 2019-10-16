import Link from 'next/link';
import Slider from "react-slick";

import WebsiteLayout from '../components/websiteLayout';

import info from '../db/lugInfo';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    background: "#5a5a5a",
    padding: "30px"
}

const sliderTxt = {
    textAlign: "center",
    color: "white",
    margin: "1rem"
}

const iconSection = {
    textAlign: "center",
    margin: "1em"
}

const iconImage = {
    width: "50%"
}

const moveLeftBtnDiv = {
    direction: "ltr"
}

const EnglishLink = {
    direction: "ltr"
}

const mapStyle = {
    border: "1px solid black",
    width: "100%"
}

const Index = () =>
    (
        <WebsiteLayout>

            <div style={sliderContainerStyle}>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img style={imgStyle} src="/img/slider/slide-0.jpg" />
                            <h2 style={sliderTxt}>آشنایی با توزیع‌های مختلف لینوکس </h2>
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

                <div className="row" style={iconSection}>

                    <div className="col-lg-4">
                        <img style={iconImage} src="/img/icon/free-icon.png" />
                        <h2>ورود آزاد و رایگان</h2>
                        <p>ورود کلیه افراد با هر تخصصی و سطح دانش، برای شرکت در لاگ آزاد و رایگان هست. </p>
                    </div>
                    <div className="col-lg-4">
                        <img style={iconImage} src="/img/icon/group-icon.png" />
                        <h2>نشست خودمانی</h2>
                        <p>قسمت اصلی لاگ یک نشست و صحبت خودمانی پیرامون اخبار و مباحث علمی و کامپیوتری هست.</p>
                    </div>
                    <div className="col-lg-4">
                        <img style={iconImage} src="/img/icon/present-icon.png" />
                        <h2>کارگاه و ارائه</h2>
                        <p>جلسات لاگ به طور معمول شامل ارائه و آموزش هست ولی از کنجکاوی، سوال و اشکال هم استقبال می‌شود. </p>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <section id="about">
                    <h2>درباره ما</h2>
                    <p>لاگ رامسر، نشست هفتگی، عمومی و رایگان علاقه‌مندان به تکنولوژی و کامپیوتر هست، به همراه بحث و گفتگو در زمینه های مختلف و کارگاه و ارائه های کوتاه در زمینه های مختلف.</p>
                    <h3>لاگ چیه، شما کی هستید و چه‌کاری می‌کنید؟ </h3>
                    <p>لاگ (به انگلیسی: LUG) با حرف اول واژه‌های عبارت Linux Users Group (ترجمه: گروه کاربران لینوکس) ساخته شده. ما گروهی از افراد داوطلبانه، غیردولتی و غیرانتفاعی هستیم که نشست‌ها و گفتگوهایی رو ترتیب می‌دیم و اگر فرصتش پیش بیاد رویدادهایی اجتماعی رو برگزار می‌کنیم. اهداف لاگ از این قراره: </p>
                    <ul>
                        <li>فراهم آوردن این امکان برای کاربران در هر سن و با هر زمینه‌ای تا با دیگر کاربران سیستم‌عامل گنو/لینوکس و نرم‌افزارهای آزاد ارتباط بگیرند. </li>
                        <li>به‌وجود آوردن بستری برای پشتیبانی محلی که کاربران بتوانند پرسش‌های خود را مطرح کنند. </li>
                        <li>ارائه پشتیبانی، کمک به پیشرفت و دفاع از افراد و شرکت‌ها و صنایع محلی که در بستر سیستم‌عامل گنو/لینوکس و نرم‌افزارهای آزاد و یا در پیاده‌سازی آن فعالیت می‌کنند. </li>
                        <li>برگزاری و پشتیبانی از رویدادهای اجتماعی محلی با هدف ارتقای دانش و معرفی ابزارهای مرتبط </li>
                        <li>ساده‌سازی دسترسی به منابع آموزشی و در صورت امکان آموزش کاربران برای استفاده از سیستم‌عامل گنو/لینوکس و نرم‌افزارهای آزاد</li>
                        <li>معرفی فرصت‌های شغلی و کمک به گسترش بازار کار محلی برای کاربران سیستم‌عامل گنو/لینوکس و نرم‌افزارهای آزاد </li>
                    </ul>
                    <div className="row" style={moveLeftBtnDiv}>
                        <Link href='/about'><a className="btn btn-lg btn-primary">اطلاعات بیشتر</a></Link>
                    </div>
                </section>

                <hr className="featurette-divider" />

                <section id="lastNews">

                    <h2>آخرین لاگ ها</h2>

                    <div className="row">

                        {
                            //console.log(info.lugDays)
                            info.lugDays.sort((a, b) => a.id < b.id).slice(0, 4).map(lug => (
                                <div key={lug.id} className="col-md-6 col-xs-12">
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={lug.pic} className="card-img" alt={"lug pic " + lug.id} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{"لاگ " + lug.id}</h5>
                                                    <p className="card-text">{lug.desc}</p>
                                                    <p className="card-text"><small className="text-muted">{lug.date}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>


                </section>

                <hr className="featurette-divider" />

                <section id="contact">
                    <h2>راه های ارتباطی</h2>
                    <div className="row">

                        <div className="col-md-8 col-xs-12">
                            <iframe style={mapStyle} height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=50.64917206764222%2C36.910545928340646%2C50.65193474292755%2C36.912385994347076&amp;layer=mapnik&amp;marker=36.9114659668923%2C50.65055340528488"></iframe><br /><small><a href="https://www.openstreetmap.org/?mlat=36.91147&amp;mlon=50.65055#map=19/36.91147/50.65055">View Larger Map</a></small>
                        </div>

                        <div className="col-md-3 col-xs-12">
                            <p>آدرس:</p>
                            <address>رامسر - ابریشم محله - نگارخانه حیاط حیات</address>
                            <p>تلفن: <tel>01155229119</tel></p>
                            <p>صفحه اینستاگرام: <a style={EnglishLink} href="https://instagram.com/Ramsarlug/">RamsarLug@</a></p>
                            <p>گروه تلگرام : <a href="https://t.me/ramsarlug">RamsarLug@</a></p>
                        </div>

                    </div>

                </section>
            </div>

        </WebsiteLayout>
    );

export default Index;