import { Schema } from "express-validator";

// Schema validation to permitted parameters for the launch router.
export const validationLaunchSchema: Schema = {
  search: {
    optional: true,
    isString: true,
    errorMessage: "the search parameter is not string",
  },
  limit: {
    optional: true,
    isNumeric: true,
    errorMessage: "the limit parameter is not numeric",
  },
  page: {
    optional: true,
    isNumeric: true,
    errorMessage: "the page parameter is not numeric",
  },
  results: {
    optional: true,
    isIn: { options: [["success", "fail"]] },
    errorMessage: "the results parameter is not valid",
  },
};
