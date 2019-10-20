import WebsiteLayout from "../../components/websiteLayout";
import { useRouter } from 'next/router';

const Lug = () => {
    const { query } = useRouter();

    return (
        <WebsiteLayout>
            <div id="single-lug" className="container">
                <h1>لاگ {query.id}</h1>
            </div>
        </WebsiteLayout>
    )
};

Lug.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
  
    console.log(`Fetched show: ${show.name}`);
  
    return { show };
  };

export default Lug;