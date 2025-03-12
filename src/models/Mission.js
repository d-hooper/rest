import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {
    codename: { type: String, required: true, maxLength: 100 },
    objective: { type: String, required: true, maxLength: 200 },
    year: { type: String, required: true, maxLength: 25 },
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
    ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
    completed: { type: Boolean, required: true, default: false }

  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

MissionSchema.virtual('location', {
  ref: 'Location',
  localField: 'locationId',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('rat', {
  ref: 'Rat',
  localField: 'ratId',
  foreignField: '_id',
  justOne: true
})