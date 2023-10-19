import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/registration";
import Notloggedinuser from "./privateroutes/notloggedinusers";
import LoginPage from "./pages/login";
import ForgetPassPage from "./pages/forgetpass";
import Loggedinuser from "./privateroutes/loggedinusers";
import Home from "./components/home";
import Mychat from "./components/myChat";
import Mystories from "./components/stories";
import Myfriends from "./components/myfriends";

function App() {
  // eslint-disable-next-line no-unused-vars
  const truepath = true;
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Notloggedinuser />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgetpass" element={<ForgetPassPage />} />
        </Route>
        <Route element={<Loggedinuser />}>
          <Route path="/home" element={<Home />} />
          <Route path="/mychat" element={<Mychat />} />
          <Route path="/myfriends" element={<Myfriends />} />
          <Route path="/mystories" element={<Mystories />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
