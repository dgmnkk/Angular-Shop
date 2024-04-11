import { AccountsService } from '../../services/account.service';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public accountsService: AccountsService) { }
  ngOnInit(): void{
    this.accountsService.user$.subscribe(user => {
      if(user){
        this.accountsService.currUser.set({
          email: user.email!,
          username: user.displayName!
        });
      }else{
        this.accountsService.currUser.set(null);
      }
    });
  }
  onLogout() {
    this.accountsService.logout().subscribe();
    window.location.reload();
  }
}