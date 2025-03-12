import { dbContext } from "../db/DbContext.js"

class MissionsService {

  getAllMissions() {
    const missions = dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return missions
  }

  async addMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('location')
    await mission.populate('rat', '-name -picture')
    return mission
  }
}

export const missionsService = new MissionsService()