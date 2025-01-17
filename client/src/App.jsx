import Website from './pages/Website';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/layout/Layout';
import Properties from './pages/properties/Properties';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ToastContainer } from 'react-toastify';
import {ReactQueryDevtools} from 'react-query/devtools';
import "react-toastify/dist/ReactToastify.css";
import Property from './pages/property/Property';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading.....</div>} />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties">
              <Route index element={<Properties/>} />
              <Route path=":propertyId" element={<Property/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
  
export default App;
