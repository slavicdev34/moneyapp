import { Row, Button, Glass, Center, Col } from '../styles/shared';
import { CurrencyInput } from './CurrencyInput';

export const Form = () => {
  return (
    <form>
      <Row $align="flex-end" $direction="row">
        <Col $size={1}>
          <CurrencyInput />
        </Col>
        <div>
          <Button>Convert</Button>
        </div>
      </Row>
      <Center $margin="2rem 0 0">
        <Glass>Equals to: 123 USD</Glass>
      </Center>
    </form>
  );
};
