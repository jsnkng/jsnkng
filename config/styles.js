import { createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 1.25s ease-in-out;
    opacity: 1.0;
    -webkit-transition: background .25s  ease-in-out;
    -moz-transition: background .25s  ease-in-out;
    -o-transition: background .25s  ease-in-out;
    -ms-transition: background .25s  ease-in-out;
    transition: background .25s  ease-in-out;
  }
  @-webkit-keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }
  @keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    word-break: normal;
  }
  

  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

/* Make clicks pass-through */
#nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: ${({ theme }) => theme.colors.color_three};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }
  
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    ${'' /* box-shadow: 0 0 10px ${({ theme }) => theme.colors.color_two}, 0 0 5px ${({ theme }) => theme.colors.color_two}; */}
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  
  /* Rremove these to get rid of the spinner */
  ${'' /* #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: .875rem;
    left: .625rem;
  }
  #nprogress .spinner-icon {
    width: 2.5rem;
    height: 2.5rem;
    box-sizing: border-box;
    border: solid 8px transparent;
    border-top-color:  ${({ theme }) => theme.colors.color_two};
    border-left-color:  ${({ theme }) => theme.colors.color_three};
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  } */}
  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  
  ${'' /* @-webkit-keyframes nprogress-spinner {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } */}



  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    top: 77vh;
    left: 2%;
    height: 1.5rem;
    width: 2.25rem;
    padding: 0.875rem 0;
    margin: 2rem 0;
    background: ${ ({ theme }) => theme.colors.background};
    z-index: 10000;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${ ({ theme }) => theme.colors.text};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${ ({ theme }) => theme.colors.dimtext};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    right: 2rem !important;
    top: 1.25rem !important;
    height: 2.25rem !important;
    width: 2.25rem !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
    height: 2.25rem !important;
    width: .375rem !important;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    ${SuperQuery().minWidth.md.css`
      width: 40vw !important;
    `}
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${ ({ theme }) => theme.colors.box_background};
    padding: 0;
    font-weight: 700;
    font-size: 4.5vw;
    ${SuperQuery().minWidth.md.css`
      font-size: 3vw;
    `}
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 10%;
    outline: none;
    width: 100%;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
   

  }

  .navigation__links {
      outline: none;
      border: none;
      list-style-type: none;
      margin: 15vh 0 0 0;
      padding:0;
      li {
        margin: 0;
        padding: 0 0 5vh 0;
        cursor: pointer;
        &:hover {
          color: ${ ({ theme }) => theme.colors.color_two};
        }
      }
    }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
}



`



export default GlobalStyle
