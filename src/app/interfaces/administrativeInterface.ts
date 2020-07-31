export interface IndividualExpenceSheetInterface {
    name: string;
    lastname: string;
    type: string;
    textExpenceSheet: string;
}

export interface overheadInterface {
    name: string;
    lastName: string;
    type: string;
    quickDescription;
    total: number;
}


export interface AddMedicationRequest {
     unitCost: number,
	 name: string,
	 description:  string
}

export interface AddMedicationResponse {
    chargeableId: number,
    unitCost: number,
    name: string,
    description: string,
    creationDate: any
}

export interface GetAllMetication {
    chargeableId: number,
    unitCost: number,
    name: string,
    description: string,
    creationDate: any
}


export interface ReducerAdmin {
    medicationAdded: GetAllMetication,
    listMedication: GetAllMetication[]
}
