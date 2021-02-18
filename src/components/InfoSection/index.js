import React from 'react';
import { Button } from '../ButtonElements';
import BlueDoor from './blueDoor.JPEG';
import RedDoor from './redDoor.JPEG';
import GreenDoor from './greenDoor.JPEG';
import OrangeDoor from './orangeDoor.JPEG';
import PurpleDoor from './purpleDoor.JPEG';
import PurpleDoorOpen from './purpleDoorOpen.JPEG';
import OrangeDoorOpen from './orangeDoorOpen.JPEG';
import GreenDoorOpen from './greenDoorOpen.JPEG';
import RedDoorOpen from './redDoorOpen.JPEG';
import BlueDoorOpen from './blueDoorOpen.JPEG';

import {
  InfoContainer,
  InfoWrapper,
  HeadieOne,
  HeadieTwo,
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
    <HeadieTwo>Art Festival 2021</HeadieTwo>
    <div></div>
            <HeadieOne>
        Choose the Room you would like to Enter!
        </HeadieOne>
      <InfoContainer>
        <InfoWrapper>
      <a href='https://users.aber.ac.uk/hal34/SU%20Website/performance/performance.html?fbclid=IwAR2sMLPDDKiGWk7PTYMAUTj1NG14HewEPDKJD--ghYvdqyGVPCPY6bfiMZQ'>
              <img style ={doorframes} src={BlueDoor} draggable='false' width='180px'
                            onMouseOver={e => e.currentTarget.src = BlueDoorOpen}
                            onMouseOut={e => e.currentTarget.src = BlueDoor
                            }
              />
              </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/written/written.html'>
              <img style ={doorframes} src={RedDoor} draggable='false' width='180px'
                            onMouseOver={e => e.currentTarget.src = RedDoorOpen} 
                            onMouseOut={e => e.currentTarget.src = RedDoor}
                           />
                           </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/photography/photography.html?fbclid=IwAR1HhfPmWKhWY1aw_6JjiF3XAvepyAwqLyqFWhZYawI60rkUNs2PaOj-QiY'>            
              <img style ={doorframes} src={GreenDoor} draggable='false' width='180px'
                                          onMouseOver={e => e.currentTarget.src = GreenDoorOpen} 
                                          onMouseOut={e => e.currentTarget.src = GreenDoor}/>
                                          </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/music/music.html?fbclid=IwAR1GKK0vlhWFz0wn_cNrzTgOK3N9txCBI6yD0sG7No40SHKsSkkGmk2p_PM'>                          
              <img style ={doorframes} src={OrangeDoor} draggable='false' width='180px'                   
                       onMouseOver={e => e.currentTarget.src = OrangeDoorOpen} 
                            onMouseOut={e => e.currentTarget.src = OrangeDoor}/>
                            </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/test2.html'>            
              <img style ={doorframes} src={PurpleDoor} draggable='false' width='180px'
                                          onMouseOver={e => e.currentTarget.src = PurpleDoorOpen} 
                                          onMouseOut={e => e.currentTarget.src = PurpleDoor}/>
                                          </a>
              </InfoWrapper>
          </InfoContainer>
    </>
  );
};

export default InfoSection;
