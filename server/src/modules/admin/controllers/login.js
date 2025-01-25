import loginService from "../services/login.js";

const loginController = async (req, res) => {
  try {
    const user = await loginService(req.body);
    res.status(200).send({
      status: 200,
      message: "Login successfully",
      user: user,
    });
  } catch (err) {
    res.status(500).send({
      req: req.body,
      status: 500,
      message: "Internal server error",
    });
  }
};
export default loginController;
