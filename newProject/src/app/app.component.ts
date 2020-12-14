import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Machine à Laver',
      status: 'éteint'

    },

    {
      name: 'Orinateur',
      status: 'allumé'
    },
    {
      name: 'Refregerateur',
      status: 'éteint'
    }

  ];




  constructor()
  {
    setTimeout(
      () => {
        this.isAuth = true
      }, 4000

    );

    
}
onAllumer()
{
  console.log('On allume tout !');


}
}
