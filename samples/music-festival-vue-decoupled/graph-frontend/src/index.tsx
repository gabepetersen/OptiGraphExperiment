import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SearchPage from './pages/SearchPage/SearchPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);
