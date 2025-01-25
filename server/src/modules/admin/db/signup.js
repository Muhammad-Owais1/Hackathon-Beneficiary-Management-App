import Model from "../models/index.js";

const signupDb = (data) => {
  try {
    return Model(data).save();
  } catch (error) {
    throw error;
  }
};

export default signupDb;
