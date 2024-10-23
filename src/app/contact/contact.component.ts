import { Component } from '@angular/core';  
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm : FormGroup;
  constructor(private fb : FormBuilder){
    this.contactForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required,Validators.minLength(10)]]
    });
  }
  onSubmit(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
      alert('Thank you for contacting us');
      this.contactForm.reset();
    }
  }

}
