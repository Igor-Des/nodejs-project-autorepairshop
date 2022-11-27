import { Routes, Route } from 'react-router-dom';
import Container from "@mui/material/Container";

import { Header, Car, UserInfo } from "./components";
import { Registration, Login, FullCar, Home, AddCar } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element = { <Home /> }/>
          <Route path="/cars/:id" element = { <FullCar /> }/>
          <Route path="/add-car" element = { <AddCar /> }/>
          <Route path="/cars/:id/edit" element = { <AddCar /> }/>
        </Routes>
      </Container>
    </>
  );
}

export default App;