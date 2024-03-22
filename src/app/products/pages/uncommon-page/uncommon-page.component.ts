import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Tatiana';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Fabricio';
    this.gender = 'male';
  }

  // i18n Plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Eduardo',
    'Melissa',
    'Andrea',
    'Daniela',
  ];

  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Actualmente tenemos un cliente esperando',
    other: 'Actualmente tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  //KeyValue Pipe
  public person = {
    name: 'Tatiana',
    age: 22,
    address: 'La Ceja, Colombia',
  };

  // Async Pipe
  public myObservableType = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}
