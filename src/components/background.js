import React from 'react';
import * as UI from '../assets/styles/background';
import { Wrapper } from '../components/wrapper';

export const Background = props => {
  return (
   <UI.Background>
     <Wrapper>
        {props.children}
     </Wrapper>
   </UI.Background>
  )
}