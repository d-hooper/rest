import { dbContext } from "../db/DbContext.js"

class RatsService {
  async getAllRats() {
    const rats = dbContext.Rat.find()
    return rats
  }

}

export const ratsService = new RatsService()