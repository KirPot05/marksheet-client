import { useState } from "react";
import { useData } from "../context/dataContext";
import "../styles/Search.css";

function Search() {

	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const { changeURL } = useData();


	const handleSearch = (e) => {
		e.preventDefault();

		if(name !== '' || id !== ''){
			changeURL(`/search?name=${name}&id=${id}`);
		}
	}	

	return (
		<form className="search" onSubmit={handleSearch} >
			<input 
				type="text" 
				name="name" 
				placeholder="Name" 
				className="input__field"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<input 
				type="text" 
				name="id" 
				placeholder="Id" 
				className="input__field"
				value={id}
				onChange={(e) => setId(e.target.value)}	
			/>

			<input type="submit" value="Search" className="searchBtn" />
		</form>
	);
}

export default Search;
