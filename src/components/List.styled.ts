import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

interface DataRowProps {
  $highlight?: boolean;
}
interface HideOnMobile {
  $hideOnMobile?: boolean;
}

export const TH = styled.th<HideOnMobile>`
  display: ${(props) => (props.$hideOnMobile ? 'none' : 'table-cell')};
  padding: 0.35rem 0.75rem;
  text-align: left;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  @media ${breakpoints.sm} {
    display: table-cell;
  }
`;

export const TD = styled.td<HideOnMobile>`
  display: ${(props) => (props.$hideOnMobile ? 'none' : 'table-cell')};

  white-space: nowrap;
  padding: 0.4rem 0.75rem;

  @media ${breakpoints.sm} {
    display: table-cell;
    gap: 2.5rem;
    padding: 0.4rem 0.75rem;
  }
`;

export const Table = styled.table`
  font-size: 0.7rem;
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 0.275rem;

  @media ${breakpoints.sm} {
    font-size: 0.85rem;
  }
`;

export const Thead = styled.thead`
  background-color: var(--bgAccent);
`;

export const DataRow = styled.tr<DataRowProps>`
  background-color: ${(props) => (props.$highlight ? 'var(--bgHighlight)' : 'inherit')};
  border-top: 1px solid var(--accent);
  border-bottom: 1px solid var(--accent);
`;
