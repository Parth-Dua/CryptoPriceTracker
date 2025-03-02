---
id: refresh-behavior
title: Refresh Behavior
---


# Refresh Behavior


## 1. Manual Refresh
Clicking the **"Refresh"** button explicitly calls `refetch()` from React Query, triggering a new request to CoinGecko.


- If CoinGecko returns cached data (often 1–5 minutes on free plans), you might see no change in the prices.
- On subsequent refreshes, React Query sets `isFetching` instead of `isLoading`, so you may not see the large loading spinner unless you explicitly check for `isFetching`.


## 2. Automatic Refresh on Focus
React Query, by default, re-fetches when the window or tab regains focus. 
- This can make the data appear to update automatically without the user clicking “Refresh.”
