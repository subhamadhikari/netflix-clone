import Row from "./components/row";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import requests from "./request";
import "./App.css"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
        <Row title="Series" fetchUrl={requests.fetchSeries}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Currently Airing" fetchUrl={requests.fetchAiringSeries}/>
    </div>
  );
}

export default App;
