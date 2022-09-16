import type { Data } from '../utils';
import { TD, TH, Thead, Table, DataRow } from './List.styled';

interface TableProps {
  data: Data;
}

export const List: React.FC<TableProps> = ({ data }) => {
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
        {data.list.map((l, i) => (
          <DataRow $highlight={i % 2 === 0} key={l.code}>
            <TD>{l.country}</TD>
            <TD>{l.currency}</TD>
            <TD>{l.amount}</TD>
            <TD>{l.code}</TD>
            <TD>{l.rate}</TD>
          </DataRow>
        ))}
      </tbody>
    </Table>
  );
};
