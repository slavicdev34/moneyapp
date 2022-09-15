import { FormEventHandler, useCallback, useState } from 'react';
import { Row, Button, Glass, Center, Col } from '../styles/shared';
import { calculate, type Data } from '../utils';
import { CurrencyInput } from './CurrencyInput';

interface Props {
  data: Data[];
}

export const Form: React.FC<Props> = ({ data }) => {
  const [result, setResult] = useState<string>();
  const handleSubmit = useCallback<FormEventHandler>(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const result = calculate(Number(formData.get('amount')), String(formData.get('code')), data);
      setResult(result?.toFixed(2));
    },
    [data],
  );

  return (
    <form onSubmit={handleSubmit}>
      <Row $align="flex-end" $direction="row">
        <Col $size={1}>
          <CurrencyInput data={data} />
        </Col>
        <div>
          <Button>Convert</Button>
        </div>
      </Row>
      {result && (
        <Center $margin="2rem 0 0">
          <Glass>Equals to: {result} </Glass>
        </Center>
      )}
    </form>
  );
};
