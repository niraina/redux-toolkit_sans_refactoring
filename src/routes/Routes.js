import PostSingle from "../features/posts/PostSingle";
import PostUpdate from "../features/posts/PostUpdate";
import Home from "../pages/Home";

export const ROUTE_URL = [
    {
        path: "/",
        element: <Home />,
        exact: true
    },
    {
        path: "/post/:id",
        element: <PostSingle />,
        exact: false
    },
    {
        path: "/update/:id",
        element: <PostUpdate />,
        exact: false
    }
]