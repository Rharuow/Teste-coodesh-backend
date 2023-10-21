import { LaunchModel } from "../models/Launch.mjs";

const index = async (req, res) => {
  try {
    const launches = await LaunchModel.find();

    return res.json({ results: launches });
  } catch (error) {
    return res
      .error(400)
      .json({ message: "Desculpe, houve um erro ao listar os lançamentos" });
  }
};

export { index as launchesList };
