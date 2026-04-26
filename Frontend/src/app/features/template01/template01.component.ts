import { Component } from '@angular/core';
import { UserInfos } from '../../shared/models/userInfos';

@Component({
  selector: 'app-template01',
  imports: [],
  templateUrl: './template01.component.html',
  styleUrl: './template01.component.scss',
})
export class Template01Component {
  infoPerso: UserInfos[] = [
    {
      name: 'Jovi',
      jobPosition: '',
      email: 'Jovi@gmail.com',
      phone: '',
      description: ''
    }
  ];
}
