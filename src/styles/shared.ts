import styled from 'styled-components';
import { breakpoints, sizes } from './breakpoints';

interface ColProps {
  $size: number;
}

interface WithMargin {
  $margin?: string;
}

interface RowProps {
  $margin?: string;
  $align?: string;
}

interface ColorProps {
  $color: 'bg' | 'highlight' | 'accent' | 'primary';
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  align-items: ${(props) => props.$align ?? 'flex-start'};
  margin: ${(props) => props.$margin};
  @media ${breakpoints.sm} {
    flex-direction: row;
  }
`;

export const Col = styled.div<ColProps>`
  flex-grow: ${(p) => p.$size};
  flex-shrink: 1;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 1.5rem;
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 1.2rem;
`;

export const Color = styled.span<ColorProps>`
  color: var(--${(props) => props.$color});
`;

export const Container = styled.div<WithMargin>`
  width: 100%;
  margin: ${(props) => props.$margin ?? '0 auto'};
  @media ${breakpoints.sm} {
    max-width: ${sizes.sm};
  }
  @media ${breakpoints.md} {
    max-width: ${sizes.md};
  }
  @media ${breakpoints.lg} {
    max-width: ${sizes.lg};
  }
  @media ${breakpoints.xl} {
    max-width: ${sizes.xl};
  }
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: var(--highlight);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: none;
`;

export const Glass = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.375rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  padding: 0.5rem 1.5rem;
`;

export const P = styled.p`
  margin: 2rem 0;
`;

export const Center = styled.div<WithMargin>`
  text-align: center;
  margin: ${(props) => props.$margin};
`;
