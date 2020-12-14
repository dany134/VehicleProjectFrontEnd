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
  vehicleMakeStore;
  createVehicleMakeStore;
  editVehicleMakeStore;
  vehicleModelStore;
  createVehicleModelStore;
  constructor() {
    this.createVehicleMakeStore = new CreateVehicleMakeStore(
      this,
      vehicleMakeService
    );
    this.vehicleMakeStore = new VehicleMakeStore(this, vehicleMakeService);
    this.editVehicleMakeStore = new EditVehicleMakeStore(
      this,
      vehicleMakeService
    );
    this.vehicleModelStore = new VehicleModelStore(
      this,
      vehicleModelService,
      vehicleMakeService
    );
    this.createVehicleModelStore = new CreateVehicleModelStore(
      this,
      vehicleModelService
    );
    this.editVehicleModelStore = new EditVehicleModelStore(
      this,
      vehicleModelService
    );
  }
}
