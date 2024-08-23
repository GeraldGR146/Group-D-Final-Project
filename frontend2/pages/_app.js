// pages/_app.js
import '../styles/global.css';
import Header from '../components/header';
import Footer from '../components/Footers/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Header />
        <Component {...pageProps} />
        <Footer />
        </>
    );
}

export default MyApp;