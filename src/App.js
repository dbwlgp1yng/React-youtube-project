import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:keyword",
        element: <Search />,
      },
      {
        path: "/videos/watch/id",
        element: <VideoDetail />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
