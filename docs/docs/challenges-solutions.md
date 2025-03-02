---
id: challenges-solutions
title: Challenges & Solutions
---

# Challenges & Solutions

## 1. Real-Time Data

**Challenge**: Cryptocurrencies change in value minute by minute.

**Solution**:
- We use **React Query** for caching and background re-fetch.
- We provide a **manual "Refresh"** button for immediate refetching.

## 2. Search & Filter

**Challenge**: Users might want to quickly find a specific coin among several listed.

**Solution**:
- A **search bar** filters the local list of coins by name (case-insensitive).

## 3. Error Handling

**Challenge**: The API might fail, or we could exceed rate limits.

**Solution**:
- **React Query** surfaces errors into `isError` and `error`.
- We show a **Semantic UI** negative message if a request fails.

## 4. Rate Limiting & Cached Data

**Challenge**: CoinGecko’s free plan may cache data for 1–5 minutes, so calling the endpoint too frequently may return the same data.

**Solution**:
- We inform users that manual refresh may not always reflect a price change if they are refreshing rapidly.
- Encourage a more moderate refresh frequency or rely on React Query's default behavior.

## 5. Responsive UI

**Challenge**: Maintain a consistent experience on both desktop and mobile screens.

**Solution**:
- Utilize **Semantic UI**'s **Grid** system to ensure responsive layout.
- Ensure text and buttons scale appropriately for different viewports.
