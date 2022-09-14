import { Color } from '../styles/shared';
import { NavContainer, Nav, Logo } from './TopNav.styled';

export const TopNav: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo href="/">
          <Color $color="accent">Exchange</Color> <Color $color="highlight">rates</Color>
        </Logo>
      </NavContainer>
    </Nav>
  );
};
