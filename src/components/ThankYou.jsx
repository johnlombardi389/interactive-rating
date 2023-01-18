import { useState } from "react";
// Style
import styled from "styled-components";
// Image
import ThankYouImg from "../assets/images/illustration-thank-you.svg";

function ThankYou() {
  return (
    <div>
      <Card>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
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

export default ThankYou;
