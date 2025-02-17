import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route paath="/" element={<RouteLayout />}></Route>
    )
  );
  return <RouterProvider router={router} />;
}
