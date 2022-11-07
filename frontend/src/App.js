import { Routes, Route } from 'react-router-dom';
import Container from "@mui/material/Container";

import { Header, Car, UserInfo } from "./components";
import { Registration, Login, FullCar, Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element = { <Home /> }/>
          <Route path="/cars/:id" element = { <FullCar /> }/>
          <Route path="/login" element = { <Login /> }/>
          <Route path="/register" element = { <Registration /> }/>
        </Routes>
      </Container>
    </>
  );
}

export default App;

 {/* <Login /> */}
        {/* <Registration /> */}
        {/* <UserInfo /> */}
        {/* <FullCar />
        <Car
          id={1}
          brand="BMW"
          color="Blue"
          year={2022}
          VIN="45H45F4FERDFSG"
          engineNumber="5DFGHDFGSERG3F4ERF"
          user={
            {
              fullName: "Ivan",
              email: "admin@admin.ru",
              role: "Owner"
            }
          } />
        <Car
          id={2}
          brand="Audi"
          color="White"
          year={2015}
          VIN="534DFGHHDF6"
          engineNumber="DFGJHDRG5TDFH"
          user={
            {
              fullName: "Alex",
              email: "alex@user.ru",
              role: "Owner"
            }
          } />
        <Car
          id={3}
          brand="LADA"
          color="Green"
          year={2025}
          VIN="4FGHDFGHJ7"
          engineNumber="FGJMNDFGJHDRFGH54HFG"
          user={
            {
              fullName: "Noname",
              email: "noname@admin.ru",
              role: "Admin"
            }
          } />
          <Car
          id={1}
          brand="BMW"
          color="Blue"
          year={2022}
          VIN="45H45F4FERDFSG"
          engineNumber="5DFGHDFGSERG3F4ERF"
          user={
            {
              fullName: "Ivan",
              email: "admin@admin.ru",
              role: "Owner"
            }
          } />
        <Car
          id={2}
          brand="Audi"
          color="White"
          year={2015}
          VIN="534DFGHHDF6"
          engineNumber="DFGJHDRG5TDFH"
          user={
            {
              fullName: "Alex",
              email: "alex@user.ru",
              role: "Owner"
            }
          } />
        <Car
          id={3}
          brand="LADA"
          color="Green"
          year={2025}
          VIN="4FGHDFGHJ7"
          engineNumber="FGJMNDFGJHDRFGH54HFG"
          user={
            {
              fullName: "Noname",
              email: "noname@admin.ru",
              role: "Admin"
            }
          } /> */}
