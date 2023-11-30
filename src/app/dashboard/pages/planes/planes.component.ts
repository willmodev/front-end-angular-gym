import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanService } from '@services/plan.service';
import { Plan } from '@interfaces/plan.interface';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes.component.html',
})
export default class PlanesComponent implements OnInit {

  public plans: Plan[] = [];

  private planService = inject(PlanService)


  ngOnInit(): void {
    this.setPlanService();
  }


  setPlanService() {
    this.planService.getClientes().subscribe({
      next: (data) => {
        this.plans = data;
        console.log(this.plans);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
