import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  sendUserToMainPostListing(): void {
    this.navigateTo('posts');
  }

  private navigateTo(route_name: string): void {
    this.router.navigate(['/' + route_name]);
  }
}
