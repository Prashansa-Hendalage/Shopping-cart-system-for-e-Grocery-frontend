import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  message: string | undefined;
  constructor(private userService: UserService){}

  ngOnInit(): void{
    this.forUser();
  }

  forUser(){
    this.userService.forUser().subscribe(
      (Response) => {
        console.log(Response);
        this.message = Response;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
