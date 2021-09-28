import Head from "next/head";
import Link from "next/link";
import Layout from '/components/layout'
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
            </Head>
            <div className="container">First Post</div>
        </Layout>
    );
}
