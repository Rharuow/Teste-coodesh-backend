import { model, Schema } from "mongoose";

const rocketsSchema = new Schema({
  id: String,
  name: String,
  color: String,
  launches: [
    {
      year: String,
      success: Boolean,
      id: String,
    },
  ],
});

type RocketsSchema = {
  id: string;
  name: string;
  color: string;
  launches: Array<{
    year: string;
    success: boolean;
    id: string;
  }>;
};

const RocketModel = model("Rockets", rocketsSchema);

export { RocketModel, rocketsSchema, RocketsSchema };
