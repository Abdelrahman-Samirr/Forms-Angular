import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm implements OnInit {

  registerForm!:FormGroup;

  ngOnInit() {
  this.registerForm = new FormGroup(
    {
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      userName: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/)]),
      confirmPassword: new FormControl("", Validators.required)
    }
  );
}


  // passwordMatchValidator(form:FormGroup){
  //   const password = form.get('password')?.value
  //   const confirmPassword = form.get('confirmPassword')?.value

  //   if(password === confirmPassword){
  //     return null
  //   }else{
  //     return { passwordMismatch: true };
  //   }
  // }

  submit() {
  console.log(this.registerForm.value);
}

}
