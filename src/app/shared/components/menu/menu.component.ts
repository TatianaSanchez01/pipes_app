import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT,
              routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon'
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: PrimeIcons.COG,
        items: [
          {
            label: 'Custom Pipes',
            icon: PrimeIcons.COG,
            routerLink: 'custom'
          },
        ],
      },
    ];
  }
}
