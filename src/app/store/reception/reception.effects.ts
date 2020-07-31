import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReceptionService } from '../../services/reception.service';
import { PatientService } from '../../services/patient.service';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromActionsReception from './reception.actions';
import { from, of } from 'rxjs';

@Injectable()
export class receptionEffects {

    constructor(private actions$: Actions,
        private receptionService: ReceptionService,
        private patientService: PatientService,
        private router: Router) {
    }

    fetchAllPatients = createEffect(() => 
    this.actions$.pipe(
      ofType(fromActionsReception.getAllPatientsAction),
      switchMap(action =>
        this.patientService.fetchAllPatients(action.token).pipe(
          switchMap(result => [
            fromActionsReception.fetchAllPatientsAction({allPatients: result})
          ]),
          catchError((error) => of(fromActionsReception.errorAddedPatientToConsultationAction({error})))
        ))
    ));

    addPatientEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActionsReception.AddPatientsToConsultationAction),
            switchMap(action =>
                this.receptionService.registerPatient(action.patientData.name, action.patientData.lastName, action.patientData.severity, action.token).pipe(
                    switchMap(result => [
                        fromActionsReception.patientAddedSuccessAction(),
                        fromActionsReception.AddUniquePatientToArrayAction({patientUnique: result})
                    ]),
                    catchError((error) => of(fromActionsReception.errorAddedPatientToConsultationAction({error})))
                )
            )
        ));

}