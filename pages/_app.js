import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Router from 'next/router'
import Link from 'next/link'
import App from 'next/app'
import Head from 'next/head'
import styled from 'styled-components'
import { PageTransition } from 'next-page-transitions'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import themes from '../config/theme'
import GlobalStyle from '../config/styles.js'
import * as gtag from '../config/gtag'
import cookies from 'next-cookies'
import Menu from '../components/elements/menu'
import useWindowDimensions from '../hooks/useWindowDimensions'

const stack = []
const MyApp = ({ appCookies, router, Component, pageProps }) => {
  const windowDimension = useWindowDimensions()
  const [themeName, setTheme] = useState('lightMode')
  const [pageTitle, setPageTitle] = useState('')
  const [pageType, setPageType] = useState('')
  const [pageURL, setPageURL] = useState('')
  const [pageImage, setPageImage] = useState('')
  const [pageDescription, setPageDescription] = useState('')

const setThemeName = themeName => {
  setTheme(themeName)
  document.cookie = `themeName=${themeName}; path=/`
}

  useEffect(() => {
    if (appCookies.themeName) {
      setThemeName(appCookies.themeName)
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeName('darkMode')
      }
    }
  }, [])


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  /* desctructuring an object to get isOpen value because this is a 
  callback for the react burger menu and that's how they do it. */
  const handleMenuStateChange = ({ isOpen }) => {
    setIsMenuOpen(isOpen)
  }

  const [showBurgerMenu, setShowBurgerMenu] = useState(true)
  
  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      NProgress.start()
      setShowBurgerMenu(false)
      setIsMenuOpen(false)
    })
    Router.events.on('routeChangeComplete', url => { 
      gtag.pageview(url)
      NProgress.done()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  }, [])
  
 
  
  return (
    <ThemeProvider theme={ { colors: themes[themeName], flexboxgrid: themes.flexboxgrid }}>
    <Head>
    <title>Jason King: Engineer/Designer/Artist</title>
    <meta property="og:title" content="Jason King: Engineer/Designer/Artist" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.jsnkng.com" />
    <meta property="og:image" content="https://www.jsnkng.com/jsnkng_ogimage.jpg" />
    <meta name="description" content="Hello. I’m Jason King. I'm a Creative Technologist, an Engineer & UX Developer, Graphic Designer, and Visual Artist, living in Princeton, NJ." />
    
    </Head>
      <GlobalStyle />
      <div id='outer__wrapper'>
        <Menu 
          right={false} 
          isMenuOpen={isMenuOpen} 
          handleMenuStateChange={handleMenuStateChange} 
          className={showBurgerMenu && windowDimension.scrollY < Math.round(0.9 * windowDimension.height) ? 'absolute' : 
                    showBurgerMenu && windowDimension.scrollY >= Math.round(0.9 * windowDimension.height) ? 'fixed' :
                    'none'}
        />
        <div id='inner__wrapper'>
          
      <PageTransition
        timeout={500}
        classNames="page-transition"
        loadingDelay={500}
        loadingTimeout={{
          enter: 400,
          exit: 400,
        }}
        loadingClassNames="loading-indicator">
              <Component {...pageProps} themeName={themeName} setThemeName={setThemeName} key={router.route} />
          </PageTransition>
        </div>
      </div>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const appCookies = cookies(appContext.ctx);
  return { ...appProps, appCookies}
}

export default MyApp
