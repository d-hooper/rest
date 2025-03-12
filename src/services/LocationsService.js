import { dbContext } from "../db/DbContext.js"

class LocationsService {
  async getAllLocations() {
    const locations = await dbContext.Locations.find()
    return locations
  }

  async getMissionsByLocation(locationId) {
    const missions = await dbContext.Missions.find({ locationId: locationId }).populate('location').populate('rat', '-name -picture')
    return missions
  }
}

export const locationsService = new LocationsService()