import Link from 'next/link';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

const fullpage = {
    minHeight: "calc(100vh - 114px)"
}

const WebsiteLayout = props => (
    <div>

        <Head>
            <title>لاگ رامسر</title>
            <meta name="description" content="وبسایت لاگ رامسر، نشست هفتگی، عمومی و رایگان علاقه‌مندان به تکنولوژی و کامپیوتر در رامسر" />
            <meta name="keywords" content="RamsarLug, lug, linux, user, group, ramsar, رامسرلاگ, رامسر, لاگ, لینوکس" />

            <meta name="author" content="محسن شعبانیان" />
            <link rel="me" href="https://MohsenShabanian.com/" type="text/html" />
            <link rel="me" href="mailto:mohsen1299@gmail.com" />
            <link rel="me" href="sms:+989113923310" />

            <meta name="twitter:card" content="وبسایت لاگ رامسر، نشست هفتگی، عمومی و رایگان علاقه‌مندان به تکنولوژی و کامپیوتر در رامسر" />
            <meta name="twitter:creator" content="@mohsen1299" />
            <meta name="twitter:url" content="https://rlug.ir/" />
            <meta name="twitter:title" content="لاگ رامسر" />
            <meta name="twitter:description" content="وبسایت لاگ رامسر، نشست هفتگی، عمومی و رایگان علاقه‌مندان به تکنولوژی و کامپیوتر در رامسر" />
            <meta name="twitter:image" content="https://rlug.ir/img/logo.png" />
            <meta name="twitter:image:alt" content="وبسایت لاگ رامسر، نشست هفتگی، عمومی و رایگان علاقه‌مندان به تکنولوژی و کامپیوتر در رامسر" />

            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            {/* <link rel="stylesheet" href="/css/bootstrap.min.css" /> */}
            <link rel="stylesheet" href="/css/style.css" />
        </Head>

        <nav className="navbar navbar-expand-lg  sticky-top navbar-dark bg-dark">
            <Link href='/'><a className="navbar-brand" >
                <img src="/img/logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo" />
                لاگ رامسر
                    </a>
            </Link>

            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link href='/'><a className="nav-link">صفحه اصلی</a></Link>
                </li>
                <li className="nav-item">
                    <Link href='/about'><a className="nav-link">درباره ما</a></Link>
                </li>
                <li className="nav-item">
                    <Link href='/lugNews'><a className="nav-link">اخبار لاگ ها</a></Link>
                </li>
                <li className="nav-item">
                    <a href="https://lugs.ir/" className="nav-link">سایر لاگ ها</a>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/mohsen12999/rlug" className="nav-link">گیت هاب</a>
                </li>
            </ul>

        </nav>

        <div style={fullpage}>
            {props.children}
        </div>

        <footer >
            <p >طراحی توسط <a href="http://mohsenshabanian.com">محسن شعبانیان</a> و سعید رستمی با کمک <a href="https://getbootstrap.com">بوت استرپ</a></p>
        </footer>
    </div>
);

export default WebsiteLayout;