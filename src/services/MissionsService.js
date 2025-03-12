import { dbContext } from "../db/DbContext.js"

class MissionsService {
  getAllMissions() {
    const missions = dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return missions
  }

}

export const missionsService = new MissionsService()