import { dbContext } from "../db/DbContext.js"

class MissionsService {

  async getAllMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return missions
  }


  async addMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('location')
    await mission.populate('rat', '-name -picture')
    return mission
  }

  async updateMission(missionId, missionData) {
    const mission = await dbContext.Missions.findById(missionId);
    mission.completed = missionData.completed
    await mission.save()
    return mission
  }
}

export const missionsService = new MissionsService()