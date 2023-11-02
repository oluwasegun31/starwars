import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { HomePage, SigupPage, SigninPage } from "./pages";
import { FormProvider } from "./context";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="signup"
          element={
            <FormProvider>
              <SigupPage />
            </FormProvider>
          }
        />
        <Route
          path="signin"
          element={
            <FormProvider>
              <SigninPage />
            </FormProvider>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
