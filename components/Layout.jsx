import Head from "next/head"

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Minimal-Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>{children}</div>
        </>
    )
}

export default Layout;