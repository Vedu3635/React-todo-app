import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import About from "./pages/About";
import Alltodos from "./pages/Alltodos";
import Login1 from "./pages/Login1";
import Signup from "./pages/Signup";
import PrivateRoute from "./pages/PrivateRoute";
import TodoDetail from "./pages/TodoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootPage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/allTodos",
        element: <Alltodos />,
      },
    ],
  },
  {
    path: "/Login1",
    element: <Login1 />,
  },
  {
    path: "//signup",
    element: <Signup />,
  },
]);

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const login = () => setIsAuthenticated(true);
  // const logout = () => setIsAuthenticated(false);

  return (
    <>
      {/* <Navbar isAuthenticated={isAuthenticated} logout={logout} /> */}
      <RouterProvider router={router} />
    </>
  );
}
export default App;
