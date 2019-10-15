import Link from 'next/link'
import Head from 'next/head'

export default function Nav() {
    return (
        <div>
            <Head>
                <title>لاگ رامسر</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </Head>
            {/* <nav>
                <Link href='/'><a>index</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/contact'><a>contact</a></Link>
                <Link href='/lugNews'><a>lugNews</a></Link>
            </nav> */}

            <nav className="navbar navbar-expand-lg  sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src="/img/logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    لاگ رامسر
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">صفحه اصلی<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">درباره ما</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/lugNews">اخبار لاگ ها</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">ارتباط با ما</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}