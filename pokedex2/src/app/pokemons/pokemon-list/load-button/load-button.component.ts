import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../pokemon/pokemon';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasmore = true;
  @Input() result: Result;

  constructor() { }

  ngOnInit() {
  }

}
