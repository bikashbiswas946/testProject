const router = require("express").Router();
const userSchema = require('./model');

router.get('/getUser', (req, res) => {
    userSchema.find((err, user) => { 
        if(!err) return  res.status(200).json({ msg: "user available", userList: user})
        return res.status(501).json({ msg: "user not found", err: err })
    })
});


router.post("/userDetails", async (req, res) => {
    let { name, email, phoneNo, address, status } = req.body;
    const Email = await userSchema.findOne({ email });
    if (Email)  return res.status(400).json({ msg: "Email is already Eexist "});
  
    const userAdd = new userSchema({ name, email, phoneNo, address, status });
      await userAdd.save()
        .then((user) => {
          res.status(200).json({
            msg: "user Added Successfully",
            user: user,
          });
        })
        .catch((err) => {
          res.status(501).json({
            msg: "user not added please try again",
            err: err,
          });
        });
  });

  module.exports = router;
