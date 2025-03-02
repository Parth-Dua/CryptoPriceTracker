---
id: api-integration
title: API Integration
---

# API Integration

Our **Crypto Price Tracker** fetches data from the **[CoinGecko API](https://www.coingecko.com/en/api/documentation)**.

## Endpoint Used

We rely on the following endpoint for simple price and 24h change data:

GET /simple/price ?ids={comma-separated coin IDs} &vs_currencies=usd &include_24hr_change=true


### Example Request

GET https://api.coingecko.com/api/v3/simple/price ?ids=bitcoin,ethereum,binancecoin,tether,cardano &vs_currencies=usd &include_24hr_change=true


### Example Response

```json
{
  "bitcoin": {
    "usd": 28176,
    "usd_24h_change": -1.53270039
  },
  "ethereum": {
    "usd": 1900,
    "usd_24h_change": 0.4052
  }
}

### Important:

CoinGecko’s free plan caches data for around 1–5 minutes. This means rapid requests often yield the same results.
If you request data too frequently, you might see no change in the price.

### Error Handling
We use Axios for HTTP requests. If a request fails (e.g., network error or non-200 status code), an exception is thrown. React Query gracefully catches this, and we display an error message to the user in the UI.
