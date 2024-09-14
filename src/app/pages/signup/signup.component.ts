import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
    // ToastModule,
  ],
  // providers: [MessageService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    // private messageService: MessageService
  ) {}

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

  signUp(): void {
    const user = this.signUpForm.value;
    this.userService.signUp(user).subscribe((result: string) => {
      if (result === 'success') {
        // this.messageService.add({severity: 'success', summary: 'success', detail: 'User created successfully!' })
        this.router.navigate(['']); // Redirecting to login page after user register
        //alert('this is userService')
      } else {
        alert('Unable to register user!');
        console.log('This is different ')
      }
    });
  }
}
