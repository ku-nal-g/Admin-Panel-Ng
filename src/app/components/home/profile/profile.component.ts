import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  
  closeProfileBar(){
    this.auth.setProduct(false);
  }
}
