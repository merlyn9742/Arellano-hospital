export interface ReceptionInterface {
  patientId: string;
  name: string;
  lastName: string;
  turn: number;
  severity: string;
  assignedTo: string;
}

export interface RegisterUserInterface {
  name: string;
  lastName: string;
  severity: string
}

export interface PatientInterface {
  patientId: number,
  name: string,
  lastName: string,
  turn: number,
  severity: string,
  assignedTo: assignedToInterface,
  status: string,
  billing: BillingInterfaceInterface,
  creationDate: any,
  total: number
}

export interface ReducertPatientInterface {
  allPatients: any,
  uniquePatient: PatientInterface
}

export interface BillingInterfaceInterface {
  billingId: number,
  billingItems: BillingItemsInterface[],
  total: number
}

export interface assignedToInterface {
   firebaseUserId: string,
   role: string,
   displayName: string,
   email: string,
   creationDate: any
}

export interface BillingItemsInterface {
  billingItemId: number,
   chargeable: ChargeableInterface,
   description: string,
   quantity: number,
   total: number,
   creationDate: any

}

export interface ChargeableInterface {

   chargeableId: number,
   unitCost: number,
   name: string,
   description: string,
   creationDate : any
}




export interface ReceptionScreenInterface {
  loading: boolean;
  error: string;
}


