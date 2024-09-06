import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

constructor (private formBuilder:FormBuilder,
  private userService:UserService,
  private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:[''],
      password:['']
    })
  }

  login(): void{
    const user =this.loginForm.value
    console.log(user)
    this.userService.login(user).subscribe((user:User)=>{
      if(user.userId){
        this.router.navigate(['list']);
        // alert('login success');
      }else{
        alert('Invalid username or password');
      }
    })
    // alert('you clicked login button')
  }
}
