import React from 'react';
import { Button } from '../ButtonElements';
import BlueDoor from './blueDoor.gif';
import RedDoor from './redDoor.gif';
import GreenDoor from './greenDoor.gif';
import OrangeDoor from './orangeDoor.gif';
import PurpleDoor from './purpleDoor.gif';
import PurpleDoorOpen from './purpleDoorOpen.gif';
import OrangeDoorOpen from './orangeDoorOpen.gif';
import GreenDoorOpen from './greenDoorOpen.gif';
import RedDoorOpen from './redDoorOpen.gif';
import BlueDoorOpen from './blueDoorOpen.gif';
import BurgundyDoorOpen from './burgundyDoorOpen.gif';
import BurgundyDoor from './burgundyDoor.gif';
import BackImg from './backgorudn.jpg';
import './style.css'

import {
  InfoContainer,
  InfoWrapper,
  HeadieOne,
  HeadieTwo,
  mQueries,
  Doorman,
  Door1,
  Door2,
  Door3,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';
import { colors, fade, Grid } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { FaBlackTie, FaBurn } from 'react-icons/fa';

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
    <div  styles={{ backgroundImage:`url(${BackImg})` }}></div>
    <HeadieTwo>Gŵyl y Celfyddydau 2021</HeadieTwo>
    <br></br>
    <HeadieTwo>Arts Festival 2021</HeadieTwo>
    <div></div>
            <HeadieOne>
            <br></br>
        Dewiswch yr ystafell yr hoffech chi fynd i mewn iddi!
        </HeadieOne>
        <br></br>
        <HeadieOne>
        Choose the Room you would like to Enter!
        </HeadieOne>
        <Doorman>
        {/* <div className="mQueries"> */}
        <a href="https://users.aber.ac.uk/hal34/SU%20Website/performance/performance.html?fbclid=IwAR2sMLPDDKiGWk7PTYMAUTj1NG14HewEPDKJD--ghYvdqyGVPCPY6bfiMZQ">
        <button id='blue'>
        Perfformiad
          <br></br>
          Performance
          </button> 
          </a>
          <div class="divider"/>
          <a href="https://users.aber.ac.uk/hal34/SU%20Website/written/written.html">
        <button id="red">
        Ysgrifenedig
        <br></br>
        Written
        </button> 
        </a>
        <div class="divider"/>
        <a href="https://users.aber.ac.uk/hal34/SU%20Website/photography/photography.html?fbclid=IwAR1HhfPmWKhWY1aw_6JjiF3XAvepyAwqLyqFWhZYawI60rkUNs2PaOj-QiY">
        <button id="green">
        Ffotograffiaeth
        <br></br>
        Photography
          </button> 
          </a>
          <div class="divider"/>
          <a href="https://users.aber.ac.uk/hal34/SU%20Website/music/music.html?fbclid=IwAR1GKK0vlhWFz0wn_cNrzTgOK3N9txCBI6yD0sG7No40SHKsSkkGmk2p_PM">
        <button id="orange">
        Cerddoriaeth
        <br></br>
        Music
          </button> 
          </a>
          <div class="divider"/>
          <a href="https://users.aber.ac.uk/hal34/SU%20Website/digital/digital.html">
        <button id="purple">
        Digidol
        <br></br>
        Digital
        </button> 
        </a>
        <div class="divider"/>
          <a href="https://users.aber.ac.uk/hal34/SU%20Website/craft/craft.html">
        <button id="burgundy">
        Grefft
        <br></br>
        Craft
        </button> 
        </a>
        {/* </div> */}
        </Doorman>
      <InfoContainer>
        <InfoWrapper>
      <a href='https://users.aber.ac.uk/hal34/SU%20Website/performance/performance.html?fbclid=IwAR2sMLPDDKiGWk7PTYMAUTj1NG14HewEPDKJD--ghYvdqyGVPCPY6bfiMZQ'>
              <img style ={doorframes} src={BlueDoor} draggable='false' width='220px'
                            onMouseOver={e => e.currentTarget.src = BlueDoorOpen}
                            onMouseOut={e => e.currentTarget.src = BlueDoor
                            }
              />
              </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/written/written.html'>
              <img style ={doorframes} src={RedDoor} draggable='false' width='220px'
                            onMouseOver={e => e.currentTarget.src = RedDoorOpen} 
                            onMouseOut={e => e.currentTarget.src = RedDoor}
                           />
                           </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/photography/photography.html?fbclid=IwAR1HhfPmWKhWY1aw_6JjiF3XAvepyAwqLyqFWhZYawI60rkUNs2PaOj-QiY'>            
              <img style ={doorframes} src={GreenDoor} draggable='false' width='220px'
                                          onMouseOver={e => e.currentTarget.src = GreenDoorOpen} 
                                          onMouseOut={e => e.currentTarget.src = GreenDoor}/>
                                          </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/music/music.html?fbclid=IwAR1GKK0vlhWFz0wn_cNrzTgOK3N9txCBI6yD0sG7No40SHKsSkkGmk2p_PM'>                          
              <img style ={doorframes} src={OrangeDoor} draggable='false' width='220px'                   
                       onMouseOver={e => e.currentTarget.src = OrangeDoorOpen} 
                            onMouseOut={e => e.currentTarget.src = OrangeDoor}/>
                            </a>
              <a href='https://users.aber.ac.uk/hal34/SU%20Website/digital/digital.html'>            
              <img style ={doorframes} src={PurpleDoor} draggable='false' width='220px'
                                          onMouseOver={e => e.currentTarget.src = PurpleDoorOpen} 
                                          onMouseOut={e => e.currentTarget.src = PurpleDoor}/>
                                          </a>
               <a href='https://users.aber.ac.uk/hal34/SU%20Website/craft/craft.html'>            
              <img style ={doorframes} src={BurgundyDoor} draggable='false' width='220px'
                                          onMouseOver={e => e.currentTarget.src = BurgundyDoorOpen} 
                                          onMouseOut={e => e.currentTarget.src = BurgundyDoor}/>
                                          </a>
              </InfoWrapper>
          </InfoContainer>
    </>
  );
};

export default InfoSection;
