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

const RocketModel = model("Rockets", rocketsSchema);

export { RocketModel, rocketsSchema };
