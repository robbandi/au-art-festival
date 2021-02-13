import styled from 'styled-components';
import RedDoor from './redDoor.svg';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // bottom: 200px;
  // background: white;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ImageBg = styled.img`
width: 100%;
// max-height: 20%;
background-image: url(${RedDoor});
// position: relative;
z-index: 999;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  // // grid-gap: 16px;
  // padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 3.5rem;
  color: #425df5;
  margin-bottom: 6px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #425df5;
  font-weight: 1000;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;