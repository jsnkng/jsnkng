import React from 'react'
import Link from 'next/link'
import { push as Menu } from 'react-burger-menu'
import SuperQuery from '@themgoncalves/super-query'
import styled from 'styled-components'

const Element = ({ right, isMenuOpen, handleMenuStateChange, className }) => {
  /* Handles opening the menu when a menu item gains focus, for keyboard accessibility */
  const handleFocus = (e) => {
    handleMenuStateChange({isOpen:true})
  }
  return (
    <Menu__Wrapper className={className}>
      <Menu 
        right={right}
        isOpen={isMenuOpen}
        onStateChange={handleMenuStateChange}
        outerContainerId={'outer__wrapper'}
        pageWrapId={'inner__wrapper'}>
        <div className='menu'>
          <Link href='/' as='/' scroll={false}><a onFocus={handleFocus}><div>Home</div></a></Link>
          <Link href='/projects/[projectType]' as='/projects/Web' scroll={false}><a onFocus={handleFocus}><div>Web</div></a></Link>
          <Link href='/collections/[collectionType]' as='/collections/Art' scroll={false}><a onFocus={handleFocus}><div>Art</div></a></Link>     
          <Link href='/collections/[collectionType]' as='/collections/Design' scroll={false}><a onFocus={handleFocus}><div>Design</div></a></Link>
          <a href='https://shop.jsnkng.com/' onFocus={handleFocus}><div>Shop</div></a>
          <Link href='/about' as='/about' scroll={false}><a onFocus={handleFocus}><div>About</div></a></Link>
          {/* <Link href='/contact' as='/contact' scroll={false}><a onFocus={handleFocus}><div>Contact</div></a></Link> */}
        </div>
      </Menu>
    </Menu__Wrapper>
  )
}

export default Element

const Menu__Wrapper = styled.div`
  .menu {
    padding: 2rem 1rem;
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.color_two};
  }
  a div {
    padding: 1rem 0;
  }
`
