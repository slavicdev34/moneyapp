import { CurrencyWrapper, CZKWrapper, Input, InputWrapper, Label, Select } from './CurrencyInput.styled';

export const CurrencyInput: React.FC = () => {
  return (
    <div>
      <Label htmlFor="amount">Enter price in CZK</Label>
      <InputWrapper>
        <CZKWrapper>CZK</CZKWrapper>
        <Input type="text" name="amount" id="amount" placeholder="0.00" />
        <CurrencyWrapper>
          <Select id="currency" name="currency">
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </Select>
        </CurrencyWrapper>
      </InputWrapper>
    </div>
  );
};
