import User from "../Model/User.js";
import bcrypt from "bcryptjs";
import { generator } from "../utils/tokenGenerator.js";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    /// generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    const token = generator({ id: newUser._id, email: newUser.email });

    res.status(201).json({
      status: "success",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.log("Registeration error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUsers = async (_, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.log("Getting user error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUsers = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.log("Deleting user error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExisting = await User.findOne({ email });
    if (!userExisting)
      return res.status(400).json({ message: "Email or password is wrong" });

    const isMatch = await bcrypt.compare(password, userExisting.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email or password is wrong" });
    }

    const token = generator({
      id: userExisting._id,
      email: userExisting.email,
    });

    res.status(201).json({
      status: "success",
      user: {
        _id: userExisting._id,
        username: userExisting.username,
        email: userExisting.email,
      },
      token,
    });
  } catch (error) {
    console.log("Login error: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { register, login, getUsers, deleteUsers };
