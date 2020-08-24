import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Pais {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  title = 'Alkemy FunStore';
  paises: Pais[] = [
    {value: 'argentina-0', viewValue: 'Argentina '},
    {value: 'bolivia-1', viewValue: 'Bolivia '},
    {value: 'brasil-3', viewValue: 'Brasil '},
    {value: 'chile-4', viewValue: 'Chile '},
    {value: 'colombia-5', viewValue: 'Colombia '},
    {value: 'ecuador-6', viewValue: 'Ecuador'},
    {value: 'guayana-7', viewValue: 'Guyana'},
    {value: 'paraguay-8', viewValue: 'Paraguay'},
    {value: 'peru-9', viewValue: 'Perú'},
    {value: 'surinam-10', viewValue: 'Surinam'},
    {value: 'uruguay-11', viewValue: 'Uruguay'},
    {value: 'venezuela-12', viewValue: 'Venezuela'}
    
  ];
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un correo';
    }

    return this.email.hasError('email') ? 'No es un email valido' : '';
  }

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  hide = true;

}
