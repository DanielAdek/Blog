import React from 'react'
import { Link } from 'react-router-dom'
import * as UI from '../assets/styles/nav'

export const NavBar = () => {
  return (
    <UI.NavContainer>
      <UI.UL>
        <Link to='/home'>
          <UI.LI>|Home|</UI.LI>
        </Link>
        <Link to='/bloggers'>
          <UI.LI>|Blogger|</UI.LI>
        </Link>
        <Link to='/join'>
          <UI.LI>|Join Us|</UI.LI>
        </Link>
      </UI.UL>
    </UI.NavContainer>
  )
}
