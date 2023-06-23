// import logo from './logo.svg';
import './App.css';
import Header from './HeaderComponent/Header';
import Banner from './BannerComponent/Banner';
// import Main from './MainComponent/Main';
import Contact from './ContactComponent/Contact';
import Gallary from './GallaryComponent/Gallary';
import Footer from './FooterComponent/Footer';
import Article from './ArticleComponent/Article';


function App() {
  return (<div>
    {/* <!-- Header --> */}
    <div id="header">
  <div class="shell">
    <div class="cl">&nbsp;</div>
    
    <Header/>
    <Banner/>
    
  </div>
</div>
{/* <!-- End Header --> */}

{/* <!-- Main --> */}
<div id="main">
  <div class="shell">
    <Article/>
    <Gallary/>
    <Contact/>
    
  </div>
</div>
{/* <!-- End Main --> */}
<Footer/>
         </div>);
}

export default App;
