import { useState } from "react";
import "../../styles/home-page.css";
import Card from "../Card";
import { useLoaderData } from "react-router-dom";

function HomePage() {
  const data = useLoaderData();

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  // const filteredAndMappedArray = data.results
    // .filter((el) => el.name.includes(text))
  //   .map((el) => (
  //     <Card
  //       key={el.id}
  //       image={el.image}
  //       name={el.name}
  //       id={el.id}
  //     />
  //   ));

  const mappedArray = data.results.map((el) => {
    return (
      <Card 
        key={el.id}
        image={el.image}
        name={el.name}
        visible={el.name.includes(text)}
      />
    )
  })

  return (
    <main id="home-page">
      <h1>Rick and Morty</h1>

      <input
        type="text"
        placeholder="Trouve ton personnage"
        onChange={handleChange}
      />

      <section className="card-section">
        {/* {filteredAndMappedArray.length ? filteredAndMappedArray : <NoResults />} */}
        {mappedArray}
      </section>
    </main>
  );
}

export default HomePage;
