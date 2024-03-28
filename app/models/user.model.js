module.exports = mongoose => {
    var userSchema = new mongoose.Schema({
        username: String,
        email: String,
        firstName: String,
        lastName: String,
        gender: String,
        image: String,
        token: String
    });
  
    const User = mongoose.model('User', userSchema);
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
    return User;
};