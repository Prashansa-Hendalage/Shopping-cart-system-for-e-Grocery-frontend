import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  message: string | undefined;
  constructor(private userService: UserService,
    private router: Router){}

  ngOnInit(): void{
    this.forUser();
  }

  forUser(){
    this.userService.forUser().subscribe(
      (Response) => {
        console.log(Response);
        this.router.navigate(['/']);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
