import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableExampleComponent } from '../../shared/components/table-example/table-example.component';

@Component({
  selector: 'pltr-home',
  standalone: true,
  imports: [TableExampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
