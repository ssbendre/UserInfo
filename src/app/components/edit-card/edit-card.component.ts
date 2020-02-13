import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

  saveCard() {

  }
}
