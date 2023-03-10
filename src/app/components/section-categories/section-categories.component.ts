import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-categories',
  templateUrl: './section-categories.component.html',
  styleUrls: ['./section-categories.component.css'],
})
export class SectionCategoriesComponent {
  @Input() categories!: string | null;
}
