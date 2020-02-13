import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from '../../services/UserInfo/user-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserInfoService]
})
export class HomeComponent implements OnInit {
  cardData: object;
  selectedCards: any;
  searchText: string = '';

  constructor(private userInfoService: UserInfoService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.searchText = this.route.snapshot.params.firstName;
    console.log(this.searchText);
    this.userInfoService
      .getUserData()
      .subscribe(User => (this.cardData = User));
  }

  selectedCard(card) {
    this.selectedCards = card;
  }
}
