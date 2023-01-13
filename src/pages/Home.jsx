// Components
import GetRating from "../components/GetRating";
// Style
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <GetRating />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export default Home;
