import React, { Component } from 'react'


class RouterExample extends Component {
    render() {
      return (
        <>
          <BrowserRouter>
              <ul>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/about'>About</Link>
                  </li>
                  <li>
                      <Link to='/contactUs'>Contact Us</Link>
                  </li>
              </ul>
              
              <Routes>
                <Route path='/' element={ <Home /> } ></Route>
                <Route path='/about' element={ <About /> }></Route>
                <Route path='/contactUs' element={ <ContactUs /> }></Route>
              </Routes>
  
          </BrowserRouter>
        </>
      )
    }
  }

export default RouterExample
