import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#4d05e8' : '#4d05e8')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'white' : 'white')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: bold;
  outline: none;
  // letter-spacing: 0px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'white' : '#4d05e8')};
    color: ${({ primary }) => (primary ? 'black' : '#4d05e8')};
    background: ${({ dark }) => (dark ? 'white' : 'black')};
    color: ${({ dark }) => (dark ? 'black' : 'white')};
  }
`;