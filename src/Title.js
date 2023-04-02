
import React from 'react'
import image from  '../src/images/logo2.png';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function Title() {
  return (
    <div className="Title">
    <img  className='l1' src={image}/>
      <h1>FURKAN SÜT ÜRÜNLERİ HOŞGELDİNİZ</h1>
      <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/shop">Shoping</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/contact' element={< shop />}></Route>
          </Routes>
          </div>
       </Router>
      </div>
  )
}
export default Title