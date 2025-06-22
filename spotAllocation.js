function allocateSpot(vehicleType) {
  const sizeMap = { bike: 'small', car: 'medium', bus: 'large' };
  const requiredSize = sizeMap[vehicleType];

  const availableSpot = parkingSpots.find(
    (spot) => spot.size === requiredSize && spot.isAvailable
  );

  if (!availableSpot) return null;

  availableSpot.isAvailable = false;
  return availableSpot;
}


import { parkingSpots, vehicles, transactions } from './db.js';