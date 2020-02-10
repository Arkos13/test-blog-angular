import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  formCard: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formCard = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    const formData = {...this.formCard.value};
    console.log(formData);
    this.formCard.reset();
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    };
    const capital = cityMap[this.formCard.get('address').get('country').value];
    this.formCard.patchValue({address: { city: capital }});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.formCard.get('skills') as FormArray).push(control);
  }
}
