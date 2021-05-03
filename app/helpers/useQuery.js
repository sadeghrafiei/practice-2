import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';

import {Router} from '../routes/index';
// Create a client

const queryClient = new QueryClient();

export function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
