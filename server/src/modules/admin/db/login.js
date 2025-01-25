import Model from "../models/index.js";

const loginDb = async (data) => {
  try {
    const user = await Model.findOne({ email: data.email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export default loginDb;
