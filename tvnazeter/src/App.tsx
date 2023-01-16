import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Favourites from './Components/Favourites';
import FavouritesPage from './Components/FavouritesPage';
import Layout from './Components/Layout';
import SearchPage from './Components/SearchPage';

function App() {
  
  const queryClient = new QueryClient({});
  var params = useParams();
  

  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Routes>
            <Route path="/" element={<SearchPage/>} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/show/:showId" element={<SearchPage  />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
