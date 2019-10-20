import WebsiteLayout from "../../components/websiteLayout";
import { useRouter } from 'next/router';

import fetch from 'isomorphic-unfetch';

const Lug = (props) => {
    const { query } = useRouter();

    return (
        <WebsiteLayout>
            <div id="single-lug" className="container">

                <div className="text-center">
                    <img src={props.lug.pic} className="rounded" alt={"لاگ " + props.lug.id} />
                    <h1>لاگ {query.id}</h1>
                    <small className="text-muted">{props.lug.date}</small>
                </div>

                {
                    props.sections.map((section, index) => (
                        <div key={index} className="row mt-3">
                            <div className="col-md-3 col-xs-12">
                                <img className="full-img" src={section.pic} alt={section.name} />
                            </div>
                            <div className="col-md-8 col-xs-12">
                                <h5 className="card-title">{section.name}</h5>
                                <small className="text-muted">{section.type}</small><br />
                                <small className="text-muted">{"توسط " + section.author}</small>
                                <p className="card-text">{section.body}</p>
                                {
                                    section.file !== "" && (
                                        <a href={section.file} download>فایل ارائه</a>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }


            </div>
        </WebsiteLayout>
    )
};

Lug.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://apdr.ir/api/lug/${id}`);
    const data = await res.json();

    return { lug: data.lug, sections: data.sections };
};

export default Lug;