import React, { useState, useEffect } from 'react'
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
import { slide as Menu } from 'react-burger-menu'

const stack = []

const MyApp = ({ appCookies, router, Component, pageProps }) => {
  const [themeName, setThemeName] = useState('lightMode')

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    if (appCookies.themeName) {
      setThemeName(appCookies.themeName)
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeName('darkMode')
      }
    }
  }, [])

 
  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', url => { 

      const lastStack = stack.slice(-1)
      if(lastStack[0] !== undefined && url === lastStack[0][1]) {
        stack.pop()
      }
      gtag.pageview(url)
      setIsMenuOpen(false)
      NProgress.done()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  }, [])

  const handleMenuStateChange = ({ isOpen }) => {
    
    setIsMenuOpen(isOpen)
  }


  const manageFuture = (href, as) => {
    // Get current route and push to stack
    stack.push([router.route, router.asPath])
    // Get arguments href/as and push router to new routex
    router.push(href, as)
  }
  const manageHistory = () => { 
    const back = stack.pop()
    const href = back !== undefined && back.length !== 0 ? back[0] : '/'
    const as = back !== undefined && back.length !== 0 ? back[1] : '/'
    router.push(href, as)
  }
  

  return (
    <ThemeProvider theme={ { colors: themes[themeName], flexboxgrid: themes.flexboxgrid }}>
      <GlobalStyle />
           <div id='outer__wrapper'>
           <Menu 
              isOpen={isMenuOpen}
              onStateChange={handleMenuStateChange}
              outerContainerId={'outer__wrapper'}
              pageWrapId={'inner__wrapper'}>
               <ul className='navigation__links'>
                <li onClick={() => {manageFuture('/collection/[collectionName]/', '/collection/Mythologies/')}}>Mythologies</li>
                <li onClick={() => {manageFuture('/collection/[collectionName]/', '/collection/Nature_Morte/')}}>Nature Morté</li>
                <li onClick={() => {manageFuture('/collection/[collectionName]/', '/collection/Starlight_Meadows/')}}>Starlight Meadows</li>
                {/* <li onClick={() => manageFuture('/collection/[collectionName]/', '/collection/Mythologies/')}>Gator Labs</li> */}
              </ul>
            </Menu>
              <div id='inner__wrapper'>
                <PageTransition
                  timeout={400}
                  classNames="page-transition"
                  loadingDelay={1000}
                  loadingTimeout={{
                    enter: 400,
                    exit: 400,
                  }}
                  loadingClassNames="loading-indicator">
                    <Component {...pageProps} router={router} themeName={themeName} setThemeName={setThemeName} manageHistory={manageHistory} manageFuture={manageFuture} key={router.asPath} />
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
