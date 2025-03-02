---
id: state-management
title: State Management
---


# State Management


We use **React Query** to handle:


1. **Fetching** data from the CoinGecko API.
2. **Caching** and **invalidating** data.
3. **Tracking** loading and error states.


## Why React Query?


- **Cache & Deduplicate**: Once data is fetched, the same request isn't repeated until the data becomes stale.
- **Easy Refetching**: We can trigger `refetch()` manually (e.g., via a "Refresh" button).
- **Window Focus**: React Query can automatically re-fetch data when the page or tab regains focus, giving near real-time updates.


## Other Options?


- **Zustand**, **Redux**, or **Context API** could store global state, but they are typically more suited for app-wide states like UI preferences or user login. 
- For frequently changing, server-driven data (like crypto prices), **React Query** provides a more efficient solution with minimal boilerplate.
