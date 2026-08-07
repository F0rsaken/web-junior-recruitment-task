import { Outlet } from "react-router-dom";

import NavBar from "@/components/NavBar";

function App() {
	return (
		<>
			<NavBar />

			<main>
				<div className="container">
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default App;
