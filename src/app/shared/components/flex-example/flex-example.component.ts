import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pltr-flex-example',
  standalone: true,
  imports: [],
  templateUrl: './flex-example.component.html',
  styleUrl: './flex-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexExampleComponent {}
