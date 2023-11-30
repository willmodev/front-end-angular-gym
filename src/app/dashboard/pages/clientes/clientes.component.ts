import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerService } from '@services/trainer.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';
import { Client } from '@interfaces/clientes.interface';
import { ClientService } from '@services/cliente.service';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export default class ClientComponent {

  private clientService = inject( ClientService );
  public clients: Client[] = [];

  constructor() {
    this.setTrainers();
  }

  setTrainers(): void {
    this.clientService.getHeroes().subscribe({
      next: ( clients: Client[] ) => {
        console.log( clients );
        this.clients = clients;
      },
      error: ( error: any ) => console.log( error )
    })
  }

}
