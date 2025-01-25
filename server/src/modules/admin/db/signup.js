import Model from "../models/index.js";

const signupDb = async (data) => {
  try {
    return await Model(data).save();
  } catch (error) {
    throw error;
  }
};

export default signupDb;
