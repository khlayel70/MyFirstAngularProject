import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

  app1='éteint';
  app2='éteint';
  app3='éteint';

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
  this.app1='Allumer';
  this.app2='Allumer';
  this.app3='Allumer';

}
}
