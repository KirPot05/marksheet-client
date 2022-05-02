import './App.css';
import CustomTable from './components/CustomTable';
import NavBar from './components/NavBar';
import Options from './components/Options';
import Search from './components/Search';
// import Table from './components/Table';

function App() {
	return (
		<div className="App">

			<NavBar/>

			<div className="app__body">
				{/* <Table/> */}
				<div className="container">
					<Options/>
					<CustomTable/>

				</div>
				
				<Search/>
			</div>
		
		
		</div>
	);
}

export default App;
