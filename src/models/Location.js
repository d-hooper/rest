import { Schema } from "mongoose";

export const LocationSchema = new Schema(
  {
    country: { type: String, required: true, maxLength: 100 },
    area: { type: String, required: true, maxLength: 100 },
    labels: [{ type: String, required: true, maxLength: 100 }],

  },
  {

    timestamps: true,
    toJSON: { virtuals: true }

  }
)