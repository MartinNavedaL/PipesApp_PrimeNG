import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'martin';
  public nameUpper: string = 'MARTIN';
  public fullName: string = 'MaRtIn NaVeDa';

  public customDate: Date = new Date();

}
