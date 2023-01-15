import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';
import Layout from './Components/Layout';
import SearchResult from './Components/SearchResult';

function App() {
  
  const queryClient = new QueryClient({});

  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>
      <Layout>
        <SearchResult/>
      </Layout>
      </QueryClientProvider>
    </div>
  );
}

export default App;
