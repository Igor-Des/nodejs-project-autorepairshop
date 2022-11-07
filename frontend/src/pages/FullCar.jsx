import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom';

import { Car } from "../components/Car";

export const FullCar = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`/cars/${id}`).then(res => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.warn(err);
      alert('Ошибка при получении автомобиля');
    });
  }, [])
  
  if (isLoading) {
    return <Car isLoading={isLoading} isFullCar/>;
  }
  console.log(data.user);
  return (
    <>
    <Car
        id={data._id}
        brand = {data.brand}
        color = {data.color}
        year = {data.year}
        VIN = {data.VIN}
        engineNumber= {data.engineNumber}
        user={data.user}
        isFullCar
    >
    </Car>
    </>
  );
};
