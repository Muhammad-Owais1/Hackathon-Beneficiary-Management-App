import signupService from "../services/signup.js";

const signupController = async (req, res) => {
  try {
    // Validate input
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        status: 400,
        message: "Email and password are required.",
      });
    }

    // Call the signup service
    const user = await signupService(req.body);

    // Respond with success
    res.status(201).send({
      status: 201,
      message: "User created successfully.",
      user,
    });
  } catch (err) {
    console.error("Error in signupController:", err);

    // Handle duplicate email error
    if (err.code === 11000) {
      return res.status(405).send({
        status: 405,
        message: "Email already exists.",
      });
    }

    // Handle other errors
    res.status(400).send({
      status: 400,
      message: "User not created.",
    });
  }
};

export default signupController;
