import React from 'react'
import Header from './components/header/Header'
import PhotoSection from './components/photoSection/PhotoSection'
import AboutMe from './components/aboutMe/AboutMe'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import ContactMe from './components/contactMe/ContactMe'
import Footer from './components/footer/Footer'
import Navigation from './components/nav/Navigation'

const App = () => {
    return(
        <>
        <Header />
        <Navigation />
        <PhotoSection />
        <AboutMe />
        <Skills />
        <Portfolio />
        <ContactMe />
        <Footer />
        </>
    )
}

export default App
