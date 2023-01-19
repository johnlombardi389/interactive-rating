import { useState } from "react";
// Style
import styled from "styled-components";
// Image
import ThankYouImg from "../assets/images/illustration-thank-you.svg";

function ThankYou({ rating }) {
  return (
    <Card>
      <img
        src={ThankYouImg}
        alt="Card and receipt svg showing you have selected a rating"
      />
      <Rating>
        <p>You selected {rating} out of 5</p>
      </Rating>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </Card>
  );
}

const Card = styled.div`
  max-width: 450px;
  height: 475px;
  background: radial-gradient(ellipse at top left, #212832, #171e28);
  border-radius: 2.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin: 2rem 0;
  }
  h1 {
    margin: 2rem 0;
    color: white;
    font-size: 2rem;
    font-family: "Overpass", sans-serif;
    font-weight: 700;
  }
  p {
    margin-bottom: 2rem;
    color: #717882;
    font-size: 1rem;
    font-family: "Overpass", sans-serif;
    font-weight: 400;
    text-align: center;
  }
`;

const Rating = styled.div`
  background: #262f38;
  border-radius: 2rem;
  p {
    text-align: center;
    color: #fc7613;
    font-size: 1rem;
    font-family: "Overpass", sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0.5rem 1.2rem;
  }
`;

export default ThankYou;
