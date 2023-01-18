import { useState } from "react";
// Components
import GetRating from "../components/GetRating";
import ThankYou from "../components/ThankYou";
// Style
import styled from "styled-components";

function Home() {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);

  const ratingHandler = (e) => {
    setRating(parseInt(e.target.innerHTML));

    const numbers = e.target.parentElement.children;

    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.add("rating-default");
      numbers[i].classList.remove("rating-active");
    }
    e.target.classList.add("rating-active");
    e.target.classList.remove("rating-default");
  };

  const btnHandler = (e) => {
    if (rating === 0) {
      e.target.style.background = "#fc7613";
      e.target.style.color = "white";
    } else {
      e.target.style.background = "white";
      e.target.style.color = "#fc7613";
      setRated(true);
    }
  };

  return (
    <Container>
      {rated === false ? (
        <GetRating
          rating={rating}
          setRating={setRating}
          rated={rated}
          setRated={setRated}
          ratingHandler={ratingHandler}
          btnHandler={btnHandler}
        />
      ) : (
        <ThankYou />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export default Home;
