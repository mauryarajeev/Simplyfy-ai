import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import global styles
import App from "./App"; // Import the main App component
import reportWebVitals from "./reportWebVitals"; // Import for measuring performance metrics
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import { QueryClient, QueryClientProvider } from "react-query"; // Import React Query components for data fetching
import { Provider } from "react-redux"; // Import Provider for Redux store
import { store } from "./middleware/store/index"; // Import the Redux store

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Create a QueryClient instance for React Query
const queryClient = new QueryClient();

// Render the application
root.render(
  <BrowserRouter> {/* Provide routing capabilities to the app */}
    <QueryClientProvider client={queryClient}> {/* Provide the QueryClient to React Query */}
      <Provider store={store}> {/* Provide the Redux store to the app */}
        <App /> {/* Render the main App component */}
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);

// Measure performance metrics (optional)
reportWebVitals();
