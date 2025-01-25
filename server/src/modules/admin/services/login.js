import loginDb from "../db/login.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginService = async (data) => {
  try {
    const user = await loginDb(data);

    const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);

    if (isPasswordCorrect) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

      return {
        user,
        token: token,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default loginService;
