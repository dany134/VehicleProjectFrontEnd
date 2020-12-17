import { CreateVehicleMakeStore } from "./CreateVehicleMakeStore";
import { VehicleMakeStore } from "./VehicleMakeStore";
import { VehicleMakeService } from "../services/VehicleMakeService";
import { VehicleModelService } from "../services/VehicleModelService";
import { EditVehicleMakeStore } from "./EditVehicleMakeStore";
import { CreateVehicleModelStore } from "./CreateVehicleModelStore";
import { VehicleModelStore } from "./VehicleModelStore";
import { EditVehicleModelStore } from "./EditVehicleModelStore";

const vehicleMakeUrl = "https://localhost:44325/api/VehicleMakes";
const vehicleModelUrl = "https://localhost:44325/api/VehicleModels";
const vehicleMakeService = new VehicleMakeService(vehicleMakeUrl);
const vehicleModelService = new VehicleModelService(vehicleModelUrl);

export class RootStore {
  constructor() {
    this.createVehicleMakeStore = new CreateVehicleMakeStore(
      vehicleMakeService
    );
    this.vehicleMakeStore = new VehicleMakeStore(vehicleMakeService);
    this.editVehicleMakeStore = new EditVehicleMakeStore(vehicleMakeService);
    this.vehicleModelStore = new VehicleModelStore(
      vehicleModelService,
      vehicleMakeService
    );
    this.createVehicleModelStore = new CreateVehicleModelStore(
      vehicleModelService
    );
    this.editVehicleModelStore = new EditVehicleModelStore(vehicleModelService);
  }
}
