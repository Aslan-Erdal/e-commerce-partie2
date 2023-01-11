import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-categeries',
  templateUrl: './sub-categeries.component.html',
  styleUrls: ['./sub-categeries.component.css'],
})
export class SubCategeriesComponent {
  @Input() categories!: string | null;
}
