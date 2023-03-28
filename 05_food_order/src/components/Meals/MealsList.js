import React from "react";

import MealItem from "./MealItem";

const MealsList = (props) => {
  return props.meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
};

export default MealsList;
