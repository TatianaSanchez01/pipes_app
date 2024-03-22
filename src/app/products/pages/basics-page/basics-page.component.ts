import {  Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',

  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'tatiana';
  public nameUpper: string = 'TATIANA';
  public fullName: string = 'tAtIAna';

  public customDate: Date = new Date();
}
