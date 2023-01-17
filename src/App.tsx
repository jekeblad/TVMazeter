import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FavouritesPage from './Components/FavouritesPage';
import Layout from './Components/Layout';
import SearchPage from './Components/SearchPage';

function App() {
  const queryClient = new QueryClient({});
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
