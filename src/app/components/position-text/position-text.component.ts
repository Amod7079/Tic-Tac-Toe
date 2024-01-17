import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-text',
  templateUrl: './position-text.component.html',
  styleUrls: ['./position-text.component.css']
})
export class PositionTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 @Input() initialTextValue=3
}
