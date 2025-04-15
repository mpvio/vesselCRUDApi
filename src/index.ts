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

    // 4. Get vessels by name (case insensitive)
    const namedVessels = await VesselApi.getByName("titanic");
    console.log(namedVessels.length);

    // 5. Update a vessel
    const updatedVessel = await VesselApi.update(newVessel.id, { name: "Titanic II" });
    console.log(updatedVessel);

    // 6. Delete a vessel
    const deletedVessel = await VesselApi.delete(newVessel.id);
    console.log(deletedVessel);
  } catch (error) {
    console.error("Error:", error);
  }

  console.log("INTENTIONALLY FAILING CALLS")
  const ABSENT_VESSEL_ID = 0;
  try {
    const vessel = await VesselApi.getById(ABSENT_VESSEL_ID);
    console.log(vessel)
  } catch (error) {
    console.error("Get Error:", error);
  }

  try {
    const updatedVessel = await VesselApi.update(ABSENT_VESSEL_ID, { name: "Titanic II" });
    console.log(updatedVessel);
  } catch (error) {
    console.error("Update Error:", error);
  }

  try {
    const deletedVessel = await VesselApi.delete(ABSENT_VESSEL_ID);
    console.log(deletedVessel);
  } catch (error) {
    console.error("Delete Error:", error);
  }

  console.log("FINISHED")
}

main();