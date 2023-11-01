import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { HomePage, SigupPage, SigninPage } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SigupPage />} />
        <Route path="signin" element={<SigninPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
