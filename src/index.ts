import { VesselApi } from './api/VesselApi';

async function main() {
  try {
    // 1. Create a vessel
    const newVessel = await VesselApi.create({
      name: "Titanic",
      latitude: 41.7325,
      longitude: -49.9469
    });
    console.log(`${newVessel.id}`);

    // 2. Get all vessels
    const vessels = await VesselApi.getAll();
    console.log(vessels.length);

    // 3. Get one vessel
    const vessel = await VesselApi.getById(newVessel.id);
    console.log(vessel)

    // 4. Update a vessel
    const updatedVessel = await VesselApi.update(newVessel.id, { name: "Titanic II" });
    console.log(updatedVessel);

    // 5. Delete a vessel
    const deletedVessel = await VesselApi.delete(newVessel.id);
    console.log(deletedVessel);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();