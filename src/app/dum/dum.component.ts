import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dum',
  templateUrl: './dum.component.html',
  styleUrls: ['./dum.component.scss']
})
export class DumComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

}
