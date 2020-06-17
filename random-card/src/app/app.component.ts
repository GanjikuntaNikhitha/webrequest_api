import { Component  } from '@angular/core';
import { UserService } from "./services/user.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'random-card';
  user: any;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
  ) {}
// when user click the button i will reload and gives data
  deleteHero(){
        this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
        console.log(user);
      },
      (err) => {
        this.toastr.error(err.status, "OOps");
      },
    );
  }
  // when refresh the brower i will reload and gives data
  // ngOnInit() {
  //   this.userService.getUser().subscribe(
  //     (user: any) => {
  //       this.user = user.results[0];
  //       console.log(user);
  //     },
  //     (err) => {
  //       this.toastr.error(err.status, "OOps");
  //     },
  //   );
  // }
}
