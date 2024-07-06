import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  //generate constructor
  public companyName: string = 'Dog Love';
  private currentYear: number = new Date().getFullYear();
  private developerName: string = 'Manish Mallela';
  private developerWebsite: string = 'https://manishmallela.com';
  private developerEmail: string = 'mallelamanish76@gmail.com';

  constructor() {}
}
