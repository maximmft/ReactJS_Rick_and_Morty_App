import { useLoaderData } from "react-router-dom";
import "../../styles/detail-page.css";

function DetailPage() {
  const data = useLoaderData();

  return (
    <main id="detail-page">
      <article>
        <img src={data.image} />

        <hgroup>
          <h2>Character : {data.name}</h2>
          <p>Status : {data.status === "Alive" ? "🟢" : "🔴"}</p>
        </hgroup>
      </article>
    </main>
  );
}

export default DetailPage;
