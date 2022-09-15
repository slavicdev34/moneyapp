import { type Data } from '../utils';
import { CurrencyWrapper, CZKWrapper, Input, InputWrapper, Label, Select } from './CurrencyInput.styled';

interface Props {
  data: Data[];
}

export const CurrencyInput: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Label htmlFor="amount">Enter price in CZK</Label>
      <InputWrapper>
        <CZKWrapper>CZK</CZKWrapper>
        <Input type="number" step="0.01" name="amount" id="amount" placeholder="0.00" />
        <CurrencyWrapper>
          <Select id="code" name="code">
            {data.map((d) => (
              <option value={d.code} key={d.code}>
                {d.code}
              </option>
            ))}
          </Select>
        </CurrencyWrapper>
      </InputWrapper>
    </div>
  );
};
