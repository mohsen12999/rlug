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

export default Lug;