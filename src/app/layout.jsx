
import './globals.css'

// import  TrackingProvider from '../../context/tracking'
import { TrackingProvider } from '../../context/tracking';
import  {NavBar,Footer} from '../../components';
import Page from './page'

export default function Layout({ Component, pageProps }) {
  return (
    <html lang="en">
      <body>
    <TrackingProvider>
    <NavBar/>
    <Page/>
    </TrackingProvider>
    <Footer/>
    </body>
    </html>
  );

  
  }
  