import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Header = lazy(() => import('./components/UI/header/Header'))
const MainPage = lazy(() => import('./pages/MainPage/MainPage'))            
const Cta = lazy(() => import('./components/UI/cta/Cta'))                    
const Footer = lazy(() => import('./components/UI/footer/Footer'))           
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'))         
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'))  
const WorkPage = lazy(() => import('./pages/WorkPage/WorkPage'))            
const WorkIdPage = lazy(() => import('./pages/WorkIdPage/WorkIdPage'))    
const BlogPage = lazy(() => import('./pages/BlogPage/BlogPage'))          
const BlogIdPage = lazy(() => import('./pages/BlogIdPage/BlogIdPage'))     
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage')) 
const PricingPage = lazy(() => import('./pages/PricingPage/PricingPage'))


function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route 
            path='/home' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><MainPage /></Suspense>}
          />
          <Route 
            path='/about' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><AboutPage /></Suspense>}
          />
          <Route 
            path='/services' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><ServicesPage /></Suspense>}
          />
          <Route 
            path='/work' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><WorkPage /></Suspense>}
          />
          <Route 
            path='/blog' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><BlogPage /></Suspense>}
          />
          <Route 
            path='/contact' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><ContactPage /></Suspense>}
          />
          <Route 
            path='/pricing' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><PricingPage /></Suspense>}
          />
          <Route 
            path='/workIdPage' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><WorkIdPage /></Suspense>}
          />
          <Route 
            path='/blogIdPage' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><BlogIdPage /></Suspense>}
          />
          <Route 
            path='/*' 
            element={<Suspense fallback={<div style={{height: '100vh'}}></div>}><MainPage /></Suspense>}
          />
        </Routes>
      </main>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
