import React from 'react';
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MovieUsers from './components/movies/movieUsers'
import './App.css'

function App() {

  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>Welcome to my Movie Brochure</>

    },
    {
      path: "/users",
      element: <MovieUsers />
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App;

