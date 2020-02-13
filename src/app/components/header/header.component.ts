import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageServiceService } from '../../storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [StorageServiceService]
})
export class HeaderComponent implements OnInit {
  searchText: any;
  constructor(private storageServiceService: StorageServiceService, private router: Router) { }
  ngOnInit() {
  }

  findName(text) {
    this.router.navigate(['home', text.target.value]);
   // this.router.navigate([''], { queryParams: { firstName: this.searchtext}});
  }
}
