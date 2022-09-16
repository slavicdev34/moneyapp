import { type Data } from '../utils';
import { CurrencyWrapper, CZKWrapper, Input, InputWrapper, Label, Select } from './CurrencyInput.styled';

interface Props {
  list: Data['list'];
}

export const CurrencyInput: React.FC<Props> = ({ list }) => {
  return (
    <div>
      <Label htmlFor="amount">Enter price in CZK</Label>
      <InputWrapper>
        <CZKWrapper>CZK</CZKWrapper>
        <Input type="number" step="0.01" name="amount" id="amount" placeholder="0.00" />
        <CurrencyWrapper>
          <Select id="code" name="code">
            {list.map((d) => (
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
