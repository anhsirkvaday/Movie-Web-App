import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
function App() {
  const [movies, getData] = useState([]);
  useEffect(() => {
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((res) => getData(res.data.Search))
      .catch((err) => console.log(err));
  }, [])
  console.log(movies);

  const [lakshoumy, krishna] = useState({
    search: '',
    filterData: [],
  })

  const checkData = (inputData) => {
    let fetchData = movies.filter((ele) => ele.Title.toUpperCase().includes(inputData.target.value.toUpperCase()));
    krishna({ filterData: fetchData, search: inputData.target.value });
  }
  // console.log(lakshoumy.filterData);
  return (
    <>
      <header>
        <nav style={{backgroundColor:'black'}} className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo" width="30" height="30" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" style={{color:'white'}} href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color:'white'}} href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color:'white'}} href="/">Products</a>
                </li>
              </ul>
              <form className="d-flex">
                <input type='text' onChange={checkData} maxLength='15' minLength='2' placeholder="Search..." autoFocus />
                {/* <button className="btn btn-primary" type="button"></button> */}
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {lakshoumy.filterData.length === 0 && lakshoumy.search === '' ? movies.map((ele, index) =>
          <section key={index}>
            <div className='moviePoster'>
              <img src={ele.Poster} />
            </div>
            <div className='movieInfo'>
              <h3>{ele.Title}</h3>
              <span><b>Type:</b> {ele.Type}</span>
              <span><b>Year:</b> {ele.Year}</span>
            </div>
          </section>) : lakshoumy.filterData.map((ele, index) =>
            <section key={index}>
                          <div className='moviePoster'>
              <img src={ele.Poster} />
            </div>
            <div className='movieInfo'>
              <h3>{ele.Title}</h3>
              <span><b>Type:</b> {ele.Type}</span>
              <span><b>Year:</b> {ele.Year}</span>
            </div>
            </section>)}
      </main>
    </>
  );
}

export default App;
