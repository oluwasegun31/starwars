import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
  HomePage,
  SigupPage,
  SigninPage,
  TestPrivate,
  AccountSetup,
  ResetPassword,
  Characters,
} from "./pages";
import { FormProvider } from "./context";
import PrivateLayout from "./layout/PrivateLayout";

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
        <Route path="signin">
          <Route
            index
            element={
              <FormProvider>
                <SigninPage />
              </FormProvider>
            }
          />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="test" element={<TestPrivate />} />
          <Route path="account-setup" element={<AccountSetup />} />
          <Route path="characters" element={<Characters />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
