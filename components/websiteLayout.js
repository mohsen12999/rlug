import Head from 'next/head';

import Nav from './nav';
import Footer from './footer';

const fullpage = {
    minHeight: "calc(100vh - 114px)"
}

const WebsiteLayout = props => (
    <div>
        <Head>
            <title>لاگ رامسر</title>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/style.css" />
        </Head>

        <Nav />

        <div style={fullpage}>
            {props.children}
        </div>

        <Footer />
    </div>
);

export default WebsiteLayout;