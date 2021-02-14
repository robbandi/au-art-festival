import React from 'react';
import { Button } from '../ButtonElements';
import BlueDoor from './blueDoor.png';
import RedDoor from './redDoor.png';
import GreenDoor from './greenDoor.png';
import OrangeDoor from './orangeDoor.png';
import PurpleDoor from './purpleDoor.png';
import PurpleDoorOpen from './purpleDoorOpen.png';
import OrangeDoorOpen from './orangeDoorOpen.png';
import GreenDoorOpen from './greenDoorOpen.png';
import RedDoorOpen from './redDoorOpen.png';
import BlueDoorOpen from './blueDoorOpen.png';

import {
  InfoContainer,
  InfoWrapper,
  HeadieOne,
  BoxCap,
  Door1,
  Door2,
  Door3,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';
import { colors, fade, Grid } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { FaBlackTie } from 'react-icons/fa';

// function Ev(e) {
//   onMouseOver={BlueDoorOpen}
// }



const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);

  const doorframes = {
    padding: 10,
    pointerEvents: 0
    // top: 2,
    // width:400,
    // height:300,
    // left: 8,
    // frameborder:0,
    // style:border0,
    // allowfullscreen:"",
    // tabindex:0
  };

  return (
    <>
            <HeadieOne>
        Choose the Room you would like to Enter.
        </HeadieOne>
      <InfoContainer>
        <InfoWrapper>
      <a href='https://users.aber.ac.uk/hal34/SU%20Website/test2.html'>
              <img style ={doorframes} src={BlueDoor} draggable='false' width='180px'
                            onMouseOver={e => e.currentTarget.src = BlueDoorOpen}
                            onMouseOut={e => e.currentTarget.src = BlueDoor
                            }
              />
              </a>
              <img style ={doorframes} src={RedDoor} draggable='false' width='180px'
                            onMouseOver={e => e.currentTarget.src = RedDoorOpen} 
                            onMouseOut={e => e.currentTarget.src = RedDoor}
                           />
              <img style ={doorframes} src={GreenDoor} draggable='false' width='180px'
                                          onMouseOver={e => e.currentTarget.src = GreenDoorOpen} 
                                          onMouseOut={e => e.currentTarget.src = GreenDoor}/>
              <img style ={doorframes} src={OrangeDoor} draggable='false' width='180px'                   
                       onMouseOver={e => e.currentTarget.src = OrangeDoorOpen} 
                            onMouseOut={e => e.currentTarget.src = OrangeDoor}/>
              <img style ={doorframes} src={PurpleDoor} draggable='false' width='180px'
                                          onMouseOver={e => e.currentTarget.src = PurpleDoorOpen} 
                                          onMouseOut={e => e.currentTarget.src = PurpleDoor}/>
              </InfoWrapper>
          </InfoContainer>
    </>
  );
};

export default InfoSection;
