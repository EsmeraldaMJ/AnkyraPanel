import { Component } from '@angular/core';
import { land } from 'src/app/interfaces/land.module.ts';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  lands: land[] = [
    {name: 'Casas' },
    {name: 'Departamentos' },
    {name: 'Terrenos' },
    {name: 'Otros' },
  ];
}
