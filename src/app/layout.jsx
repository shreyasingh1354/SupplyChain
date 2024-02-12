
import './globals.css'

// import  TrackingProvider from '../../context/tracking'
import { TrackingProvider } from '../../context/tracking';
import  {NavBar,Footer} from '../../components';


export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
    <NavBar/>
    <Component {...pageProps} />
    </TrackingProvider>
    <Footer/>
    </>
  );
  }
