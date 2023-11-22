import React from "react";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Container } from "./components/Container/Container";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegestrationPage } from "./pages/RegestrationPage/RegestrationPage";

const routerConfig = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/registration',
    element: <RegestrationPage />
  },
  {
    path: '/',
    element: <MainPage />
  }
])

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <RouterProvider router={routerConfig} />
        </Container>
      </Provider>
    </div>
  );
};

export default App;

