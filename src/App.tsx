import React, { startTransition, lazy, Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Spinner from './components/Spinner'; // Import the Spinner component for loading states
import Layout from './components/Main'; // Import the Layout component for consistent page layout
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles


const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  const navigate = useNavigate();

  // Handle route changes with a transition effect
  const handleRouteChange = (path: string) => {
    startTransition(() => {
      navigate(path);
    });
  };

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<Layout />}>
          {/* Define routes with the Layout component wrapping them */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </Suspense>
  );
};

export default App;


