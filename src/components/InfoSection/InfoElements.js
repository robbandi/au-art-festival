import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: black;
  // visibilty: hidden;
  // background: #FFF9EF; 
  display: block;
  background-image: url(./backgorudn.jpg); 
  height: 600px;

  // background-repeat: no-repeat;
  // background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 1454px) {
    padding: 10px 0;
    height: 1150px;
  }

  @media screen and (max-width: 1220px) {
    padding: 10px 0;
    height: 1150px;
  }

  @media screen and (max-width: 1214px) {
    padding: 10px 0;
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    height: 1200px;
  }

  @media screen and (max-width: 734px) {
    opacity: 0%;
    display: none;
    height: 1px;
  }

  // @media screen and (max-width: 733px) {
  //   padding: 10px 0;
  //   height: 1700px;
  // }
  

  // @media screen and (max-width: 493px) {
  //   padding: 10px 0;
  //   height: 2900px;
  // }

  // @media screen and (max-width: 399px) {
  //   padding: 10px 0;
  //   height: 200px;
  // }
`;

export const mQueries = styled.div`
height: 200px;
width: 200px;
position: relative;
`;

export const doorframes = styled.div`
padding: 10;
pointerEvents: 0;
draggable:false;
width:400px;

@media screen and (max-width: 768px) {
  padding: 10px 0;
  width: 130px;
}
`;

export const HeadieOne = styled.div`
color: black;
opacity: 100%;
font-weight: bolder;
// background: #FFF9EF;  
position: relative;
font-size: 3vh;
bottom: 100px;
font-family: "Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;
// background: black;
display: inline-block;

@media screen and (max-width: 734px) {
  font-size: 1.5vh;
}

@media screen and (max-width: 399px) {
  bottom: 80px;
  font-size: 1.5vh;

`;

export const HeadieTwo = styled.div`
color: #f35d6d;
opacity: 100%;
// background: #FFF9EF;  
position: relative;
bottom: 100px;
font-weight: bolder;
font-size: 6vh;
// background: black;
display: inline-block;
font-family: "Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;

@media screen and (max-width: 734px) {
  font-size: 3vh;
}

@media screen and (max-width: 399px) {
  font-size: 3vh;
}

`;

export const Box = styled.figure`
color: black;
display:inline-block;
bottom: 200;
// visibility: hidden;
`;

export const BoxCap = styled.figcaption`
color: black;
background: red;
// opacity: 0;
display:inline-block;
bottom: 200;
`;

export const InfoWrapper = styled.div`
  // display: grid;
  z-index: 1;
  // background: #FFF9EF;  
  height: 660px;
  // width: 100%;
  // max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    // height: 2060px;
    // max-width: 10px;
    // max-height: 86px;
  }
`;

export const Doorman = styled.div`
  // z-index: 10;
  // background: #FFF9EF;  
  height: 60px;
  // width: 100%;
  // max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 auto;
  justify-content: center;

  @media screen and (max-width: 734px) {
    height: 1000px;
    // max-width: 10px;
    // max-height: 86px;
  }
`;

// export const button = styled.div`
// background-color: red;
// `;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const imgDia = styled.img`
  margin-bottom: 15px;
  width: 243px;
  // padding: 0 15px;
  // grid-area: col1;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  // color: #8045ed;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  // background: #FFF9EF;  
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010206' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  // color: white;
  justify-content: flex-start;
`;

export const row = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0 4px;
`;

export const column = styled.div`
flex: 25%;
max-width: 25%;
padding: 0 10px;
`;

export const columnImg = styled.image`
margin-top: 8px;
vertical-align: middle;
width: 100%;
`;

export const Door1 = styled.image`
display: grid;
  // display: flex;
  // color: white;
  position: absolute;
  top: 200px;
  float: left;
  // justify-content: flex-start;
`;

export const Door2 = styled.image`
display: grid;
  // display: flex;
  // color: white;
  position: absolute;
  top: 200px;
  // float: left;
  right: 900px;
  // justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  width: 30%;
  height: 100%;

`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;
