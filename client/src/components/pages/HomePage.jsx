import Background from "../../assets/background.jpg";
import Background2 from "../../assets/background2.jpg"
import Card from "../Card";
import Nothing from "../../assets/404.png"
import SearchBar from "../SearchBar";
import Previous from "../../assets/previous.png"
import Next from "../../assets/next.png"
import { useLoaderData } from "react-router-dom";
import { useTheme } from "../../contexts/theme";
import { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";

function HomePage() {
  const data = useLoaderData();
  const [text, setText] = useState("");
  const [tabFilterData, setTabFilterData] = useState(data.data.results)
  const {theme} = useTheme()
  const [page, setPage] = useState(1);

  const filteredData = tabFilterData.filter((card) => card.name.toLowerCase().includes(text.toLowerCase()));

  function handleSearch(e) {
      setText(e.target.value);
  }

  const handlePreviousPage = () => {
    setPage(page - 1);
    window.scrollTo(0, 0); 
  };

  const handleNextPage = () => {
    setPage(page + 1);
    window.scrollTo(0, 0); 
  };

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        setTabFilterData(response.data.results);
      })
  }, [page]);

  return (
    <>
      <div
        className="background"
        style={{backgroundImage: `url(${theme === "dark" ? Background : Background2})`}}
      >
        <h1 className="title">Rick and Morty</h1>
        <SearchBar handleSearch={handleSearch} text={text}  />
        <div className="card-list">
          {filteredData.map((card, index) => (
            <Card name={card.name} image={card.image} key={index} id={card.id} />
          ))}
          {filteredData.length === 0 ? <img src={Nothing} className="nothing"></img> : null}
        </div>
        <div className="buttons">
          {page > 1 && <img className="previous-button" src={Previous} onClick={handlePreviousPage}></img>}
          {page < tabFilterData.length-1 && <img className="next-button" src={Next} onClick={handleNextPage}></img>}
        </div>
      </div>
    </>
  );
}

export default HomePage;
