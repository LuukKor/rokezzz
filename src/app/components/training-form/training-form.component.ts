import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface ITrainingForm {
  mail: FormControl<string | null>;
  phone: FormControl<string | null>;
  terms: FormControl<boolean | null>;
  surname: FormControl<string | null>;
  topic: FormControl<string | null>;
  name: FormControl<string | null>;
  message: FormControl<string | null>;
}

@Component({
  selector: 'app-training-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './training-form.component.html',
  styleUrl: './training-form.component.scss',
})
export class TrainingFormComponent {
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', Validators.required);
  mail = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.pattern('[- +()0-9]+')]);
  topic = new FormControl('', [Validators.required]);
  message: ITrainingForm['message'] = new FormControl('', [
    Validators.required,
  ]);
  terms = new FormControl(false, [Validators.required]);
}
