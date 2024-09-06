import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit{
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
  private router:Router) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      emailAddress: [''],
      projectId: [''],
      userName: [''],
      password: [''],
    });
  }

  signUp():void{
    
    const user = this.signUpForm.value;
    this.userService.signUp(user).subscribe((result:string)=>{
      if(result === 'success'){
        this.router.navigate(['']); // Redirecting to login page after user register
      }else{
        alert('Unable to register user!')
      }
    })

  }
}
