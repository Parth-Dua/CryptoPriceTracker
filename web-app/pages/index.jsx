import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import {
  Container,
  Menu,
  Input,
  Button,
  Grid,
  Card,
  Loader,
  Message,
  Icon,
  Label,
} from 'semantic-ui-react';

// Pre-defined list of 5 cryptocurrencies
const COINS = [
  { id: 'bitcoin', name: 'Bitcoin' , icon: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"},
  { id: 'ethereum', name: 'Ethereum' },
  { id: 'binancecoin', name: 'Binance Coin' },
  { id: 'tether', name: 'Tether' },
  { id: 'cardano', name: 'Cardano' },
];

// Axios fetch function (including 24h change data)
const fetchPrices = async () => {
  // Construct the comma-separated coin IDs
  const ids = COINS.map((coin) => coin.id).join(',');

  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
    params: {
      ids,
      vs_currencies: 'usd',
      include_24hr_change: 'true', // This adds the 24h price change in the response
    },
  });

  return response.data; // JSON object with coin info
};

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Use React Query to fetch prices
  const {
    data: prices,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery('cryptoPrices', fetchPrices);

  // Filter coins by search term
  const filteredCoins = COINS.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Top Navigation Menu (NOT fixed, narrower width) */}
      <Menu inverted style={{ margin: '0 auto', width: '80%', borderRadius: 0 }}>
        <Menu.Item header>
          <Icon name="bitcoin" size="large" style={{ marginRight: '0.5em' }} />
          CryptoTracker Pro
        </Menu.Item>
      </Menu>

      {/* Main container: add spacing from top so the menu doesn't overlap */}
      <Container style={{ marginTop: '3em', marginBottom: '3em', width: '80%' }}>
        {/* Search & Refresh Controls */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <Input
            icon="search"
            placeholder="Search Cryptocurrency..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginRight: '1rem', flex: '1' }}
          />

          <Button color="blue" onClick={() => refetch()} disabled={isFetching}>
            <Icon name="refresh" />
            {isFetching ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>

        {/* Show main loader only on first fetch */}
        {isLoading && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Loader active inline="centered" size="huge">
              Fetching Prices...
            </Loader>
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <Message negative>
            <Message.Header>Error Fetching Prices</Message.Header>
            <p>{error.message}</p>
          </Message>
        )}

        {/* Display Crypto Cards */}
        {!isLoading && !isError && (
          <Grid stackable columns={3}>
            {filteredCoins.map((coin) => {
              // Price
              const coinPrice = prices?.[coin.id]?.usd ?? 'N/A';

              // 24h Change
              const change24h = prices?.[coin.id]?.usd_24h_change ?? 0;
              const isPositive = change24h >= 0;
              // Format to 2 decimal places
              const change24hFormatted = change24h.toFixed(2);

              return (
                <Grid.Column key={coin.id} style={{ marginBottom: '1rem' }}>
                  <Card fluid>
                    <Card.Content>
                      <Card.Header style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon name="chart line" style={{ marginRight: '0.5rem' }} />
                        {coin.name}
                      </Card.Header>

                      <Card.Description style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
                        <strong>Price (USD):</strong> ${coinPrice}
                      </Card.Description>

                      {/* 24h Change Section: red if negative, green if positive */}
                      <div style={{ marginTop: '1rem' }}>
                        <strong>24h Change:</strong>
                        {isPositive ? (
                          <Label color="green" style={{ marginLeft: '0.5rem' }}>
                            +{change24hFormatted}%
                          </Label>
                        ) : (
                          <Label color="red" style={{ marginLeft: '0.5rem' }}>
                            {change24hFormatted}%
                          </Label>
                        )}
                      </div>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              );
            })}
          </Grid>
        )}
      </Container>
    </div>
  );
}
