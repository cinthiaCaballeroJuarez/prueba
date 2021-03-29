import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-profesional',
  templateUrl: './form-profesional.component.html',
  styleUrls: ['./form-profesional.component.css'],

})
export class FormProfesionalComponent implements OnInit {

    form = new FormGroup({
      name: new FormControl('', [Validators.required ]),
      lastname: new FormControl('', [Validators.required ]),
      email: new FormControl('', [Validators.email, Validators.required ]),
      password: new FormControl('', [Validators.required ]),
      passwordConf: new FormControl('', [Validators.required ]),
      movil: new FormControl('', [Validators.required ]),
      radio: new FormControl('', [Validators.required ]),

    });

  constructor() {

  }

  ngOnInit(): void {
  }
/*
  get name(){
    return this.form.get('name');
  }
*/

}
