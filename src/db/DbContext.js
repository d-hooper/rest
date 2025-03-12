import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { RatSchema } from '../models/Rat.js';
import { MissionSchema } from '../models/Mission.js';
import { LocationSchema } from '../models/Location.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  Rat = mongoose.model('Rat', RatSchema);

  Mission = mongoose.model('Mission', MissionSchema);

  Location = mongoose.model('Location', LocationSchema);
}

export const dbContext = new DbContext()
