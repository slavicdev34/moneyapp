import { Col, Color, Container, H1, Row, P, H2, Grid } from './styles/shared';
import { GlobalStyle } from './styles/GlobalStyle';
import { TopNav } from './components/TopNav';
import { List } from './components/List';
import { Form } from './components/Form';
import { useQuery } from '@tanstack/react-query';
import { getRates } from './api/rates';
import { Data } from './utils';

function App() {
  const { data, error, isError } = useQuery<Data, Error>(['rates'], getRates);

  return (
    <>
      <GlobalStyle />
      <TopNav />
      <Container $margin="3rem auto 0">
        {isError ? (
          <div>{error.message}</div>
        ) : (
          <Grid $margin="0 0.5rem">
            <div>
              <H1>
                Welcome to <Color $color="highlight">Exchange</Color> rates list
              </H1>
              <P>
                Get the latest exchange rates for over 32 currencies from the comfort of your own home with the Exchange
                Rates App.
              </P>

              {data && <Form data={data} />}
            </div>
            {data && (
              <div>
                <H2>{data.date}</H2>
                <List data={data} />
              </div>
            )}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default App;
