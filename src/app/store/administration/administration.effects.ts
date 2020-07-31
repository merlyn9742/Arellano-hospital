import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, tap, catchError } from 'rxjs/operators';

import { addMedicationAction, addedMedicationAction, getAllListMedicationAction, errorInAdministrationAction } from '../administration/administration.actions';
import { AddMedicationService } from '../../services/add-medication.service';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions,

              private medicationService: AddMedicationService) {
  }




  addMedication = createEffect(() =>
  this.actions$.pipe(
    ofType(addMedicationAction), 
    switchMap(action => 
      this.medicationService.addMedicationService(action.token, action.metication.unitCost, action.metication.name, action.metication.description)
      .pipe(
        switchMap(action => [
          addedMedicationAction({medicationAdded: action})
        ]),
        catchError( error => of(errorInAdministrationAction({error})))
      )
      )
  ));



  //token: string, unitCost: number, name: string, description: string
  // addPatientEffect = createEffect(() =>
  // this.actions$.pipe(
  //     ofType(fromActionsReception.AddPatientsToConsultationAction),
  //     switchMap(action =>
  //         this.receptionService.registerPatient(action.patientData.name, action.patientData.lastName, action.patientData.severity, action.token).pipe(
  //             switchMap(result => [
  //                 fromActionsReception.patientAddedSuccessAction(),
  //                 fromActionsReception.AddUniquePatientToArrayAction({patientUnique: result})
  //             ]),
  //             catchError((error) => of(fromActionsReception.errorAddedPatientToConsultationAction({error})))
  //         )
  //     )
  // ));


}
