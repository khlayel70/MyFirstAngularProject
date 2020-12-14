import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareils-maison',
  templateUrl: './appareils-maison.component.html',
  styleUrls: ['./appareils-maison.component.scss']
})
export class AppareilsMaisonComponent implements OnInit {
 @Input() appareilName: string ;
 @Input() appareilStatus: string;
  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor()
  {
    if(this.appareilStatus ==='allumé')
    {return 'green';}

  
  else if (this.appareilStatus === 'éteint')
    return 'red';
  }

}
