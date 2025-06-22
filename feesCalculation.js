function calculateFee(vehicleType, entryTime, exitTime) {
  const rates = { bike: 10, car: 20, bus: 30 };
  const durationInHours = Math.ceil((exitTime - entryTime) / (1000 * 60 * 60));
  return durationInHours * rates[vehicleType];
}

import { parkingSpots, vehicles, transactions } from './db.js';