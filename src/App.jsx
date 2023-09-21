import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
import { Nav } from "./components";
const Home = lazy(() => import("./containers/Home"));
const PetsView = lazy(() => import("./containers/PetsView"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/pets/" element={<PetsView />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
