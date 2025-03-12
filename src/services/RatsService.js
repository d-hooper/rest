import { dbContext } from "../db/DbContext.js"

class RatsService {
  async getAllRats() {
    const rats = dbContext.Rats.find()
    return rats
  }

  async getMissionsByRatId(ratId) {
    const missions = await dbContext.Missions.find({ ratId: ratId }).populate('location').populate('rat', '-name -picture')
    return missions
  }

}

export const ratsService = new RatsService()