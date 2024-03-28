const db = require("../models");
const Recipe = db.recipes;

// Create and Save a new Recipe
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Recipe Name can not be empty!" });
    return;
  }

  // Create a Recipe
  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    prepTimeMinutes: req.body.prepTimeMinutes,
    cookTimeMinutes: req.body.cookTimeMinutes,
    servings: req.body.servings,
    difficulty: req.body.difficulty,
    cuisine: req.body.cuisine,
    caloriesPerServing: req.body.caloriesPerServing,
    tags: req.body.tags,
    userId: req.body.userId,
    image: req.body.image,
    rating: req.body.rating,
    reviewCount: req.body.reviewCount,
    mealType: req.body.mealType
  });

  // Save Recipe in the database
  recipe
    .save(recipe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Recipe."
      });
    });
};

// Retrieve all Recipes from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Recipe.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipes."
      });
    });
};

// Find a single Recipe with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Recipe.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Recipe with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Recipe with id=" + id });
    });
};

// Update a Recipe by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Recipe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Recipe with id=${id}. Maybe Recipe was not found!`
        });
      } else res.send({ message: "Recipe was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Recipe with id=" + id
      });
    });
};

// Delete a Recipe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Recipe.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Recipe with id=${id}. Maybe Recipe was not found!`
        });
      } else {
        res.send({
          message: "Recipe was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Recipe with id=" + id
      });
    });
};

// Delete all Recipes from the database.
exports.deleteAll = (req, res) => {
  Recipe.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Recipes were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all recipes."
      });
    });
};

// Find all recipes for mealType
exports.findAllforMealType = (req, res) => {
  const mealType = req.params.mealType;
  Recipe.find({ mealType: mealType })
  .then(data => {
    const responseObject = {
      recipes: data,
      total: 100,
      skip: 0,
      limit: 100
    }
    res.send(responseObject);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while retrieving tutorials."
    })
  });
}
