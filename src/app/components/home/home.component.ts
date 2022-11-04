import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userClickedToggle: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.selectedProduct$.subscribe((res) => {
      this.userClickedToggle = res;
    })
  }
  getProfileClass() {
    if (this.userClickedToggle) {
      return 'profile-expanded-div';
    }
    return 'profile-div';
  }
  getContentClass() {
    if (this.userClickedToggle) {
      return 'center-div ';
    }
    return 'center-expanded-div';

  }

}
