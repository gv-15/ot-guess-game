import {Component, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GalaStepLayoutComponent } from '../gala-step-layout/gala-step-layout.component';
import { Concursante, CONCURSANTES } from '../shared/concursantes-data';
import {NgxCaptureModule} from "ngx-capture";
import { NgxCaptureService } from 'ngx-capture';
import {tap} from "rxjs";

interface PrediccionForm {
  name: FormControl<string>;
  numGala: FormControl<number | undefined>;
  nomadaFav: FormControl<string>;
  expulsado: FormControl<string>;
  favoritoPersonal: FormControl<string>;
  nominado1: FormControl<string>;
  nominado2: FormControl<string>;
  nominadoProfe: FormControl<string>;
  nominadoCompis: FormControl<string>;
}

@Component({
  selector: 'app-gala-wizard',
  standalone: true,
  imports: [
    RouterLink,
    StepperComponent,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule,
    GalaStepLayoutComponent,
    NgxCaptureModule
  ],
  templateUrl: './gala-wizard.component.html',
  styleUrl: './gala-wizard.component.scss',
})
export default class GalaWizardComponent {
  @ViewChild('screen', { static: true }) screen: any;
  galaForm = new FormGroup<PrediccionForm>({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    numGala: new FormControl<number | undefined>(undefined, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    nomadaFav: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    expulsado: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    favoritoPersonal: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    nominado1: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    nominado2: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    nominadoProfe: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    nominadoCompis: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  concursantes: Concursante[] = CONCURSANTES;

  constructor(private captureService: NgxCaptureService) { }

  download(): void {
  this.captureService.getImage(this.screen.nativeElement, true)
    .pipe(
      tap(img => {
        this.captureService.downloadImage(img)
      })
    ).subscribe();  }
}
