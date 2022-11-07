import React from "react";

import { Car } from "../components/Car";

export const FullCar = () => {
  return (
    <>
    <Car
        id={1}
        brand = "BMW"
        color = "Blue"
        year = {2022}
        VIN = "45H45F4FERDFSG"
        engineNumber= "5DFGHDFGSERG3F4ERF"
        user={
            {
                fullName: "Ivan",
                email: "admin@admin.ru",
                role: "Owner"
            }
        }
        isFullCar
    >
        <p>Hello World! Its react app</p>
    </Car>
    </>
  );
};
