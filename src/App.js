import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Router from './Router/Router';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Container/ScrollToTop/ScrollToTop';

const App = () =>{
    return(
        <ScrollToTop>
            <NavBar />
            <Router />
            <Footer />
        </ScrollToTop>
    );
}

export default App;