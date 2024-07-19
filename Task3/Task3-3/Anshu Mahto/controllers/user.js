const User = require("../models/users");

const handleGetAllUser = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
};
const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).json({ msg: "user is empty" });
  return res.json(user);
};
const handlePostUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "all fields are req..." });
  }
  const result = await User.create({
    firstname: body.first_name,
    lastname: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  return res.status(201).json({ msg: "succses", id: result._id });
};
const handlePatchUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    email: "aniket",
  });
  return res.status(201).json({ status: "succses" });
};
const handleDeleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.status(201).json({ status: "succses" });
};

module.exports = {
  handleGetAllUser,
  handleGetUserById,
  handlePostUser,
  handlePatchUser,
  handleDeleteUser,
};
