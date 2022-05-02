import "./App.css";
import { DataProvider } from "./context/dataContext";
import CustomTable from "./components/CustomTable";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import { useRef } from "react";

function App() {


	return (
		<DataProvider>


			<div className="App">
				<NavBar />

				<div className="app__body">
					{/* <Table/> */}
					<div className="container">
						<CustomTable />
					</div>


					<Search />
				</div>
			</div>
		</DataProvider>
	);
}

export default App;
