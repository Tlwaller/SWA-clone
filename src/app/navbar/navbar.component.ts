import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  boxStatus = 'untouched'

  constructor() { }

  ngOnInit() {
  }

  toggleSearch = () => {
    if(this.boxStatus === 'untouched' || this.boxStatus === 'closed') {
      console.log(this.boxStatus);
      this.boxStatus = 'open';
    } else if(this.boxStatus === 'open') {
      console.log(this.boxStatus);
      this.boxStatus = 'closed';
    }
  }

}
