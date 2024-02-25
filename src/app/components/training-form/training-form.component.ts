import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormControlPipe } from '@/pipes/form-control/add-spaces-every-n.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    MatButtonModule,
    FormControlPipe,
  ],
  providers: [MatSnackBar],
  templateUrl: './training-form.component.html',
  styleUrl: './training-form.component.scss',
})
export class TrainingFormComponent {
  constructor(private _snackBar: MatSnackBar) {}

  @Input() topicVal = '';
  private _form: FormGroup<ITrainingForm> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
    topic: new FormControl(this.topicVal, [Validators.required]),
    message: new FormControl('', [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });

  get name() {
    return this._form.get('name');
  }

  get surname() {
    return this._form.get('surname');
  }

  get mail() {
    return this._form.get('mail');
  }

  get phone() {
    return this._form.get('phone');
  }

  get topic() {
    return this._form.get('topic');
  }

  get message() {
    return this._form.get('message');
  }

  get terms() {
    return this._form.get('terms');
  }

  onSubmit(): void {
    const message: string = this._form.invalid ? 'Popraw błędy!' : 'Wysłano';

    this._snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }
}
