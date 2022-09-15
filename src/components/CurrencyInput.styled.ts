import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 0.25rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const CZKWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.75rem;
  align-items: center;
  pointer-events: none;
  color: #666666;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  padding: 0.5rem 5rem 0.5rem 3rem;
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  align-items: center;
`;

export const Select = styled.select`
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 1.75rem;
  background-color: transparent;
  height: 100%;
  border-radius: 0.375rem;
  border-color: transparent;
  appearance: none;

  @media ${breakpoints.sm} {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
