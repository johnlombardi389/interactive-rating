// Style
import styled from "styled-components";

function GetRating() {
  return (
    <div>
      <Card>
        <p>Hello</p>
      </Card>
    </div>
  );
}

const Card = styled.div`
  max-width: 500px;
  max-height: 500px;
  background-color: hsl(213, 19%, 18%);
  border-radius: 2.5rem;
  padding: 5rem;
`;

export default GetRating;
