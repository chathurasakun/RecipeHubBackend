module.exports = mongoose => {
  var recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions: [String],
    prepTimeMinutes: Number,
    cookTimeMinutes: Number,
    servings: Number,
    difficulty: String,
    cuisine: String,
    caloriesPerServing: Number,
    tags: [String],
    userId: Number,
    image: String,
    rating: Number,
    reviewCount: Number,
    mealType: [String]
  });

  recipeSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  
  const Recipe = mongoose.model('Recipe', recipeSchema);
  return Recipe;
};