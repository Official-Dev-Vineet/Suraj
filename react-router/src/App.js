import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import RootLayout from "./Helper/RootLayout";
import Error from "./Helper/Error";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Api from "./Components/Api";
import { GlobalData } from "./Helper/GlobalData";
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Api = lazy(() => import("./Components/Api"));

const App = () => {
  const [name, setName] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const printName = (name) => {
    console.log(name)
    return name
  }

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Home />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:name" element={<Contact />} />
        <Route path="/api" element={<Api />} >
          <Route path=":id" element={<Api />} />
        </Route>
        {/* <Route path="/api" element={<Api />} />
        <Route path="/api/:id" element={<Api />} /> */}
        <Route path="*" element={<h2> Page not Found </h2>} />
      </Route>
    ))
  return (
    <GlobalData.Provider value={{ name, setName, isLoggedIn, setIsLoggedIn, printName }} >
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={routes} />
      </Suspense>
    </GlobalData.Provider>
  )
}

export default App