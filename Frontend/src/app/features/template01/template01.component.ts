import { Component } from '@angular/core';
import { User } from '../../shared/models/persons';

@Component({
  selector: 'app-template01',
  imports: [],
  templateUrl: './template01.component.html',
  styleUrl: './template01.component.scss',
})
export class Template01Component {
  infoPerso: User[] = [
    {
      id: '678787',
      name: 'Jovi',
      email: 'Jovi@gmail.com',
    },
    {
      id: '678787',
      name: 'TOTO',
      email: 'toto@gmail.com',
    },
  ];
}
