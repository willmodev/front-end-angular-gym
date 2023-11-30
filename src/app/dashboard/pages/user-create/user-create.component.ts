import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/user.interface.ts';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './user-create.component.html',
  styles: ``
})
export default class UsersComponent {

  public users: User[] = [];
  public usersService = inject( UserService )

  constructor() {
    this.setUsers();
  }


  setUsers() {
    this.usersService.getUsers().subscribe({
      next: users => {
        this.users = users;
        console.log( this.users );
      },
      error: err => console.error( err )
    })
  }

}
