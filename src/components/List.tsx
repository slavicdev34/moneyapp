import { type Data } from '../utils';
import { TD, TH, Thead, Table, DataRow } from './List.styled';

interface TableProps {
  data: Data[];
}

export const List: React.FC<TableProps> = ({ data }) => {
  if (!data) return null;

  return (
    <Table>
      <Thead>
        <tr>
          <TH>Country</TH>
          <TH>Currency</TH>
          <TH>Amount</TH>
          <TH>Code</TH>
          <TH>Rate</TH>
        </tr>
      </Thead>
      <tbody>
        {data.map((d, i) => (
          <DataRow $highlight={i % 2 === 0} key={d.code}>
            <TD>{d.country}</TD>
            <TD>{d.currency}</TD>
            <TD>{d.amount}</TD>
            <TD>{d.code}</TD>
            <TD>{d.rate}</TD>
          </DataRow>
        ))}
      </tbody>
    </Table>
  );
};
