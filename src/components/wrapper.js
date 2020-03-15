import React from 'react';
import * as UI from '../assets/styles/wrapper';
import { NavBar } from './navbar';

export const Wrapper = props => {
  return (
    <UI.Container>
      <UI.TopBar></UI.TopBar>
      <UI.HeaderText>Blogify</UI.HeaderText>
      <NavBar />
      {props.children}
    </UI.Container>
  )
}