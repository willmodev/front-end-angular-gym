import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerService } from '@services/trainer.service';
import { Trainer } from '@interfaces/trainer.interface';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-entrenadores',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './entrenadores.component.html',
  styleUrl: './entrenadores.component.css'
})
export default class EntrenadoresComponent {

  private trainerService = inject( TrainerService );
  public trainers: Trainer[] = [];

  constructor() {
    this.setTrainers();
  }

  setTrainers(): void {
    this.trainerService.getTrainers().subscribe({
      next: ( trainers: Trainer[] ) => this.trainers = trainers,
      error: ( error: any ) => console.log( error )
    })
  }

}
