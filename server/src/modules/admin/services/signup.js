import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import signupDb from "../db/signup.js";

const signupService = async (data) => {
  try {
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    data.password = hashedPassword;

    const user = await signupDb(data);

    const token = jwt.sign({ email: data.email }, process.env.JWT_SECRET);

    return { user, token };
  } catch (err) {
    console.error("Error in signupService:", err);
    throw err;
  }
};

export default signupService;
