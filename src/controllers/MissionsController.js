import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {

  constructor() {
    super('api/missions');
    this.router
      .get('', this.getAllMissions)
      .post('', this.addMission)
      .put('/:missionId', this.updateMission)

  }

  /**
 * Creates a new value from request body and returns the value
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */
  async getAllMissions(request, response, next) {
    try {
      const missions = await missionsService.getAllMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }


  /**
  * Creates a new value from request body and returns the value
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async addMission(request, response, next) {
    try {
      const missionData = request.body
      const mission = await missionsService.addMission(missionData)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }

  /**
  * Creates a new value from request body and returns the value
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async updateMission(request, response, next) {
    try {
      const missionId = request.params.missionId
      const missionData = request.body
      const mission = await missionsService.updateMission(missionId, missionData)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }

}