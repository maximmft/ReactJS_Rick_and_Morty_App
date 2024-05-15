import "./DetailPage.css";
import Background from "../../assets/background.jpg";
import { useTheme } from "../../contexts/theme";
import Background3 from "../../assets/background3.jpg"
import { useLoaderData } from "react-router-dom";

function DetailPage() {
  const data = useLoaderData();
  const {theme} = useTheme()
  
  return (
    <div
      className="background"
      style={{backgroundImage: `url(${theme === "dark" ? Background : Background3})`}}
    > 
    <div className={theme === "dark" ? "title-section-dark" : "title-section-light"}>
        <img className={"detail-image"} src={data.data.image}></img>
      <div className="detail">
        <div className="information">
      <h1 className="title">{data.data.name}</h1>
          <h4>
            {data.data.status === "Alive" ? "❤️" : "☠️"}
            {data.data.status} - {data.data.species}
          </h4>
          <h3>Gender:</h3>
          <h4>{data.data.gender}</h4>
          <h3>Origin:</h3>
          <h4>{data.data.origin.name}</h4>
          <h3>Last known location:</h3>
          <h4>{data.data.location.name}</h4>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
