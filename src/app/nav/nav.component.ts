import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async goTo(path: string): Promise<void> {
    console.log('ceva');

    const isAdmin = true;

    if(isAdmin) {
      await this.router.navigate([path]);
    } else {
      await this.router.navigate(['login-page']);
    }
  }
}
