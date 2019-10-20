import Link from "next/link";
import WebsiteLayout from "../components/websiteLayout";
import info from '../db/lugInfo';

import fetch from 'isomorphic-unfetch';

const LugNews = () =>
    (
        <WebsiteLayout>
            <div id="lug-list" className="container">
                <div className="row">

                    {
                        //console.log(info.lugDays)
                        info.lugDays.sort((a, b) => a.id < b.id).map((lug, index) => (
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
                                                <Link href="/lug/[id]" as={"/lug/" + lug.id}>
                                                    <a className="btn btn-sm btn-secondary float-left">اطلاعات بیشتر</a>
                                                </Link>
                                                <p className="card-text"><small className="text-muted">{lug.date}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </WebsiteLayout>
    );

LugNews.getInitialProps = async function () {
    const res = await fetch('https://apdr.ir/api/lugs');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);
    console.log(data);

    return {
        shows: data.map(entry => entry.lugs)
    };
};

export default LugNews;