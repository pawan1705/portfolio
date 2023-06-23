// import logo from './logo.svg';
import './Header.css';

function Header() {
  return (<div>
  {/* <!-- Logo --> */}
  <div id="logo-cnt">
      <h1 id="logo">PAWAN KUMAR SANGARE</h1>
      <h2 id="slogan">My personal portfolio</h2>
    </div>
    {/* <!-- End Logo --> */}
    <div id="status">
      <p class="available">I am currently<strong> available</strong></p>
    </div>
    <div class="cl">&nbsp;</div>
  </div>
  );
}

export default Header;
