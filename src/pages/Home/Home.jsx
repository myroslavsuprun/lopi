import { Outlet } from "react-router-dom";

import { Header } from "components";
import { Container } from "@mui/system";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Home;
// asdsadsad/
