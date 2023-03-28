import React, { useState, useCallback, useEffect } from "react";

import Card from "./../UI/Card";
import MealItem from "./MealItem";
import MealsList from "./MealsList";
import classes from "./AvailabelMeals.module.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-7adb5-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // const fetchMoviesHandler = async () => {
    //   setIsLoading(true);
    //   setError(null);
    //   const response = await fetch(
    //     "https://react-http-7adb5-default-rtdb.firebaseio.com/meals.json"
    //   );
    //   if (!response.ok) {
    //     throw new Error("Something went wrong!");
    //   }

    //   const data = await response.json();

    //   const loadedMeals = [];
    //   for (const key in data) {
    //     loadedMeals.push({
    //       id: key,
    //       name: data[key].name,
    //       description: data[key].description,
    //       price: data[key].price,
    //     });
    //   }
    //   setMeals(loadedMeals);
    //   setIsLoading(false);
    // };

    // fetchMealsHandler().catch((error) => {
    //   setError(error.message);
    //   setIsLoading(false);
    // });

    fetchMealsHandler();
  }, [fetchMealsHandler]);

  if (meals.length > 0) {
    return (
      <section className={classes.meals}>
        <Card>
          <MealsList meals={meals} />
        </Card>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.MealsLoading}>
      <p>Found no meals.</p>
    </section>
  );
};

export default AvailableMeals;
