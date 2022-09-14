import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';
import { Container } from '../styles/shared';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  backdrop-filter: blur(5px);
  background: rgba(30 41 59, 0.4);
  margin: 0 0.5rem;
  @media ${breakpoints.sm} {
    margin: 0;
  }
`;

export const NavContainer = styled(Container)`
  height: 3rem;
  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
`;
