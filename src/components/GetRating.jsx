// Style
import styled from "styled-components";

function GetRating() {
  return (
    <div>
      <Card>
        {/* <Star></Star> */}
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        {/* <Choices></Choices> */}
        <button>Submit</button>
      </Card>
    </div>
  );
}

const Card = styled.div`
  max-width: 500px;
  max-height: 500px;
  background-color: hsl(213, 19%, 18%);
  border-radius: 2.5rem;
  padding: 2rem;
  h1 {
    margin: 2rem 0;
  }
  p {
    margin-bottom: 2rem;
  }
  button {
    margin-top: 2rem;
    padding: 1rem;
  }
`;

export default GetRating;
