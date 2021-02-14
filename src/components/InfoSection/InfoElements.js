import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;  

  // background-repeat: no-repeat;
  // background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    height: 1500px;
  }
`;

export const doorframes = styled.div`
padding: 10;
pointerEvents: 0;
draggable:false;
width=400px;

@media screen and (max-width: 768px) {
  padding: 10px 0;
  width: 130px;
}
`;

export const HeadieOne = styled.div`
color: black;
font-weight: bolder;
position: relative;
font-size: 3vh;
bottom: 100px;
// font-family: Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif; 
// background: black;
display: inline-block;

`;

export const HeadieTwo = styled.div`
color: #334FFF;
position: relative;
bottom: 100px;
font-weight: bolder;
font-size: 6vh;
// background: black;
display: inline-block;

`;

export const Box = styled.figure`
color: black;
// background: red;
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
  height: 860px;
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
  color: #8045ed;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
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
