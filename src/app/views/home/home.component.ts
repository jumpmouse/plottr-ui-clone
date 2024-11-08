import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

import { FlexExampleComponent } from '@sharedComponents/flex-example/flex-example.component';
import { TableExampleComponent } from '@sharedComponents/table-example/table-example.component';

@Component({
  selector: 'pltr-home',
  standalone: true,
  imports: [TableExampleComponent, FlexExampleComponent, MatButtonToggle, MatButtonToggleGroup],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  exampleSelection: 'table' | 'flex' = 'table';
}
