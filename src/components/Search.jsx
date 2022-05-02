import "../styles/Search.css";

function Search() {
	return (
		<form className="search">
			<input type="text" name="name" placeholder="Name" className="input__field"/>

			<input type="text" name="id" placeholder="Id" className="input__field"/>

			<input type="submit" value="Search" className="searchBtn" />
		</form>
	);
}

export default Search;
