// import logo from './logo.svg';
import './Gallary.css';

function Gallary() {
  return (<div>
{/* <!-- Gallery --> */}
<div class="gallery">
      <div class="cl">&nbsp;</div>
      <h2 class="left">What I do?</h2>
      <a href="#" class="view-all">View all works</a>
      <div class="cl">&nbsp;</div>
      <div class="cl">&nbsp;</div>
      <div class="portfolio-item"> <a href="#"><img src="assets/css/images/htmlcss.jpg" alt="" /></a> <a href="#">HTML & CSS related work</a> </div>

      <div class="portfolio-item"> <a href="#"><img src="assets/css/images/nodejs.png" alt="" /></a> <a href="#">Nodejs Related server work</a> </div>
      <div class="portfolio-item"> <a href="#"><img src="assets/css/images/react.jpg" alt="" /></a> <a href="#">Reactjs related work</a> </div>
      <div class="portfolio-item last"> <a href="#"><img src="assets/css/images/javascript.png" alt="" /></a> <a href="#">Javascript related design</a> </div>
      <div class="portfolio-item"> <a href="#"><img src="assets/css/images/Python.png" alt="" /></a> <a href="#">Python Django work</a> </div>
      <div class="portfolio-item"> <a href="#"><img src="assets/css/images/database.jpg" alt="" /></a> <a href="#">Database-Mongodb & Mysql</a> </div>
      <div class="cl">&nbsp;</div>
    </div>
    {/* <!-- End Gallery --> */}
  </div>
    
  );
}

export default Gallary;
