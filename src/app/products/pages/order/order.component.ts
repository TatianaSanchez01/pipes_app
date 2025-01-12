import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | undefined | '';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.BLUE,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.BLACK,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.RED,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.RED,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.GREEN,
    },
  ];

  toggleUppercase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
