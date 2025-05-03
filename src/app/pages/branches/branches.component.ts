import { Component } from '@angular/core';
import { BranchMapComponent } from "../branch-map/branch-map.component";

@Component({
  selector: 'app-branches',
  imports: [BranchMapComponent],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.css'
})
export class BranchesComponent {

}
