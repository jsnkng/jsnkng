import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Router from 'next/router'
import Link from 'next/link'
import App from 'next/app'
import styled from 'styled-components'
import { PageTransition } from 'next-page-transitions'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import themes from '../config/theme'
import GlobalStyle from '../config/styles.js'
import * as gtag from '../config/gtag'
import cookies from 'next-cookies'
import Menu from '../components/elements/menu'

const stack = []
const MyApp = ({ appCookies, router, Component, pageProps }) => {
  const [themeName, setThemeName] = useState('lightMode')

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
  const handleMenuStateChange = ({ isOpen }) => {
    setIsMenuOpen(isOpen)
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      setIsMenuOpen(false)
    })
    Router.events.on('routeChangeComplete', url => { 
      gtag.pageview(url)
    })
    Router.events.on('routeChangeError', () => {
    })
  }, [])

  
  return (
    <ThemeProvider theme={ { colors: themes[themeName], flexboxgrid: themes.flexboxgrid }}>
      <GlobalStyle />
           <div id='outer__wrapper'>
           <Menu right={false} isMenuOpen={isMenuOpen} handleMenuStateChange={handleMenuStateChange} />
              <div id='inner__wrapper'>
                <PageTransition
                  timeout={200}
                  classNames="page-transition">
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
