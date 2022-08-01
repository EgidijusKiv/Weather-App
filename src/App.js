import './App.css';
import Search from './components/search/Search';


function App() {
  const handleOnSearchChange = function (searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
