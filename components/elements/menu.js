import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

const Element = ({ right, isMenuOpen, handleMenuStateChange }) => {
  return (
      <Menu 
        right={right}
        isOpen={isMenuOpen}
        onStateChange={handleMenuStateChange}
        outerContainerId={'outer__wrapper'}
        pageWrapId={'inner__wrapper'}>
        <ul className='navigation__links'>
          <li><Link href='/fineart/' as='/fineart/' scroll={false}><a>Fine Art</a></Link></li>
          <li><Link href='/collection/[collectionName]/' as='/collection/Mythologies/' scroll={false}><a>Mythologies</a></Link></li>
          <li><Link href='/collection/[collectionName]/' as='/collection/Nature_Morte/' scroll={false}><a>Nature Morté</a></Link></li>
          <li><Link href='/collection/[collectionName]/' as='/collection/Starlight_Meadows/' scroll={false}><a>Starlight Meadows</a></Link></li>
        </ul>
      </Menu> 
  )
}

export default Element
