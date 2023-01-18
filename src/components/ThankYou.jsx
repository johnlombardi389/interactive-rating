import { useState } from "react";
// Style
import styled from "styled-components";
// Image
import ThankYouImg from "../assets/images/illustration-thank-you.svg";

function ThankYou({ rating }) {
  return (
    <div>
      <Card>
        <Rating>
          <p>You selected {rating} out of 5</p>
        </Rating>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </Card>
    </div>
  );
}

const Card = styled.div`
  max-width: 450px;
  max-height: 500px;
  background: radial-gradient(ellipse at top left, #212832, #171e28);
  border-radius: 2.5rem;
  padding: 2rem;
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
  }
`;

const Rating = styled.div`
  background: #262f38;
  width: 50%;
  border-radius: 2rem;
  p {
    text-align: center;
    color: #fc7613;
    font-size: 0.9rem;
    font-family: "Overpass", sans-serif;
    font-weight: 400;
    padding: 0.5rem;
  }
`;

export default ThankYou;
