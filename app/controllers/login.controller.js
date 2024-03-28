const db = require("../models");
const user = db.user;

// Find a single Recipe with an id
exports.findOne = (req, res) => {
  const username = req.body.username;

  if (username === "kminchelle") {
    const responseObject = {
      id: 15,
      username: "kminchelle",
      email: "kminchelle@qq.com",
      firstName: "Jeanne",
      lastName: "Halvorson",
      gender: "female",
      image: "https://robohash.org/Jeanne.png?set=set4",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMTIwOTAwMSwiZXhwIjoxNzExMjEyNjAxfQ.F_ZCpi2qdv97grmWiT3h7HcT1prRJasQXjUR4Nk1yo8",
    };
    res.send(responseObject);
  } else {
    res.status(404).send({ message: "Not found user with id " + username });
  }
};
