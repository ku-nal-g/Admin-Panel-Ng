import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  userName: any;
  toggleClicked:boolean = false;
  togglecards:boolean = false;

  constructor(private auth: AuthService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("username");
    this.auth.selectedProduct$.subscribe((res)=>{
      this.togglecards = res;
    })
  }
  navigateBack() {
    this.auth.logout();
    this.toastr.success("Logged out Succssfully!!!");
  }
  toggleDiv(){
    this.toggleClicked = true;
    this.auth.setProduct(this.toggleClicked);
  }


}
