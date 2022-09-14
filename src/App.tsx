import { Col, Color, Container, H1, Row, P } from './styles/shared';
import { GlobalStyle } from './styles/GlobalStyle';
import { TopNav } from './components/TopNav';
import { List } from './components/List';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <GlobalStyle />
      <TopNav />
      <Container $margin="3rem auto 0">
        <Row $margin="0 0.5rem">
          <Col $size={1}>
            <H1>
              Welcome to <Color $color="highlight">Exchange</Color> rates list
            </H1>
            <P>
              Get the latest exchange rates for over 33 currencies from the comfort of your own home with the Exchange
              Rates App.
            </P>

            <Form />
          </Col>
          <Col $size={1}>
            <List data={[{} as any]} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
