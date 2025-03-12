import { Schema } from "mongoose";

export const RatSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    callSign: { type: String, required: true, maxLength: 100 },
    picture: { type: String, required: true, maxLength: 500 },
    specialties: [{ type: String, required: true }],
  },
  {

    timestamps: true,
    toJSON: { virtuals: true }

  }
)