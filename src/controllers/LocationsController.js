import { locationsService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {

  constructor() {
    super('api/locations');
    this.router
      .get('', this.getAllLocations)
      .get('/:locationId/missions', this.getMissionsByLocation)

  }

  async getAllLocations(request, response, next) {
    try {
      const locations = await locationsService.getAllLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }

  async getMissionsByLocation(request, response, next) {
    try {
      const locationId = request.params.locationId
      const locations = await locationsService.getMissionsByLocation(locationId)
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }

}