// Style
import styled from "styled-components";
// Icon
import StarIcon from "../assets/images/icon-star.svg";

function GetRating() {
  return (
    <div>
      <Card>
        <Star>
          <img
            src={StarIcon}
            alt="A star icon showing this card is about giving a rating"
          />
        </Star>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <Choices>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </Choices>
        <button>Submit</button>
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
  button {
    margin-top: 2rem;
    padding: 1rem 5rem;
    cursor: pointer;
    background: #fc7613;
    border: none;
    outline: none;
    border-radius: 2rem;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    font-family: "Overpass", sans-serif;
    font-weight: 700;
    letter-spacing: 0.25rem;
  }
`;

const Star = styled.div`
  width: 1rem;
  height: 1rem;
  padding: 1.75rem;
  background: #262f38;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Choices = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  li {
    color: white;
    width: 1rem;
    height: 1rem;
    padding: 1.75rem;
    background: #262f38;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    font-family: "Overpass", sans-serif;
    font-weight: 400;
  }
`;

export default GetRating;
