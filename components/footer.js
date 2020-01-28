import React from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Component = ({ themeName, setThemeName }) => {

const setTheme = () => {
  const newTheme = themeName === 'lightMode' ? 'darkMode' : 'lightMode'
  setThemeName(newTheme)
}
  return (
    <Footer>
      <div className='bottom__toggle'>
        <Toggle
          defaultChecked={themeName === 'lightMode' ? false : true }
          icons={false}
          aria-label='Set Light|Dark Mode'
          onChange={setTheme} />
      </div>
      <div className='bottom__social'>
        <div className='bottom__icons'>
          <a href='https://www.linkedin.com/in/jsnkng/' target='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/jsnkng' target='_blank'>
            <FaGithub />
          </a>
          <a href='https://www.instagram.com/jsnkng/' target='_blank'>
            <FaInstagram />
          </a>
        </div>
        <p>© 2020 Jason King. All rights reserved.</p>
      </div>
      <div className='bottom__credit'>
        <a href='#'><strong><span>JSN</span><br />KNG</strong><br />2020</a>
      </div>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 1rem;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.colors.box_background };
  .bottom__credit {
    display: flex;
    font-size: 0.8rem;
    line-height: .75;
    align-items:center;
    span {
      font-size: 0.9rem;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: inherit;
    }
  }
  .bottom__social {
    text-align: center;
    a {
      color: ${({ theme }) => theme.colors.text };
      padding: 0.5rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
  .bottom__toggle{
    width: 52px;
  }
}

  .react-toggle {
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

.react-toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.react-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.react-toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.toggle_track };
  background-color: ${({ theme }) => theme.colors.offbackground };
}
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${({ theme }) => theme.colors.offbackground };
  background-color: ${({ theme }) => theme.colors.toggle_track };
}

.react-toggle--checked .react-toggle-track {
  background-color: ${({ theme }) => theme.colors.text };
}

.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${({ theme }) => theme.colors.offbackground };
  background-color: ${({ theme }) => theme.colors.toggle_track };
}

.react-toggle-track-check {
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle-track-x {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-x {
  opacity: 0;
}

.react-toggle-thumb {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid ${({ theme }) => theme.colors.home_text };
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background };

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.react-toggle--checked .react-toggle-thumb {
  left: 27px;
  border-color: ${({ theme }) => theme.colors.offbackground };
}

.react-toggle--focus .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.colors.offbackground };
  -moz-box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.colors.offbackground };
  box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.colors.offbackground };
}

.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.colors.offbackground };
  -moz-box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.colors.offbackground };
  box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.colors.offbackground };
}
`
