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
            <p >طراحی توسط <a href="http://mohsenshabanian.com">محسن شعبانیان</a> با کمک <a href="https://getbootstrap.com">بوت استرپ</a></p>
        </footer>
    </div>
);

export default WebsiteLayout;