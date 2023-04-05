import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
        <Banner/>
        <Row title= "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title= "Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title= "Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title= "Action" fetchUrl={requests.fetchActionMovies}/>
        <Row title= "Comedy" fetchUrl={requests.fetchComedyMovies}/>
        <Row title= "Romantic" fetchUrl={requests.fetchRomanticMovies}/>
        <Row title= "Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
