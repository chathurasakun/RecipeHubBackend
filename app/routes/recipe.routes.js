module.exports = app => {
  const recipes = require("../controllers/recipe.controller.js");
  const user = require("../controllers/login.controller.js");
  
  var router = require("express").Router();

  router.post("/login", user.findOne);

  // Create a new Recipe
  router.post("/create", recipes.create);

  // Retrieve all Recipies
  router.get("/", recipes.findAll);

  // Retrieve recipes for mealType
  router.get('/:mealType', recipes.findAllforMealType);

  // Retrieve a single Recipe with id
  router.get("/:id", recipes.findOne);

  // Update a Recipe with id
  router.put("/:id", recipes.update);

  // Delete a Recipe with id
  router.delete("/:id", recipes.delete);

  // Delete all Recipies
  router.delete("/", recipes.deleteAll);

  app.use("/api/recipes", router);
};
