import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import HomeView from "@/pages/HomeView";
import CharacterView from "@/pages/CharacterView";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomeView /> },
			{ path: "character/:id", element: <CharacterView /> },
		],
	},
]);

export default router;
