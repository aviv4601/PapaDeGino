import React from "react";
import MealItem from "./MealItem";
import classes from "./Meals.module.css";
import Card from "../../UI/Card";

const Meals = (props) => {
  const mealsList = props.meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <div className={classes.meals}>
      {mealsList.map((meal) => (
        <Card>
          <ul>{meal}</ul>
        </Card>
      ))}
    </div>
  );
};

export default Meals;
