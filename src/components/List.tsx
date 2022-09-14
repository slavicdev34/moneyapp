import { type Data } from '../types';
import { TD, TH, Thead, Table, DataRow } from './List.styled';

interface TableProps {
  data: Data[];
}

export const List: React.FC<TableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>Exchange rate list is not available at the moment please try again later</div>;
  }

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
        <DataRow $highlight>
          <TD>Brazil</TD>
          <TD>real</TD>
          <TD>1</TD>
          <TD>BRL</TD>
          <TD>4.743</TD>
        </DataRow>
        <DataRow>
          <TD>Bulgaria</TD>
          <TD>lev</TD>
          <TD>1</TD>
          <TD>BGN</TD>
          <TD>12.551</TD>
        </DataRow>
        <DataRow $highlight>
          <TD>Australia</TD>
          <TD>dollar</TD>
          <TD>1</TD>
          <TD>AUD</TD>
          <TD>16.659</TD>
        </DataRow>
      </tbody>
    </Table>
  );
};
