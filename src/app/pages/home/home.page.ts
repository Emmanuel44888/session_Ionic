import { Component, OnInit } from '@angular/core';
// import { MethodHijacker } from 'src/app/decorators'
// import { TimeTracker } from 'src/app/shared/user.service'
// import { UserService } from 'src/app/shared/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

// @TimeTracker("home")
export class HomePage implements OnInit {

  // @Traductor("fr")
  // welcomeMessage: string;

  data: any;

  // storageStatus: any = window.localStorage.getItem('item');

  constructor() {
    this.data = [

      {
        title: 'Yoda',
        description: 'Visibilité sur les 7 prochains jours',
        icon: '../../../assets/img/avatar-yoda.png',
      },
      {
        title: 'Leia',
        description: 'Priorisation des tâches',
        icon: '../../../assets/img/avatar-leia.png'
      },
      {
        title: 'Luke',
        description: 'Visualiser le travail accompli',
        icon: '../../../assets/img/avatar-luke.png'
      }
    ];
   }

  ngOnInit() {
    // window.localStorage.removeItem('item');
    // this.sayGoodBye();
  }
  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  // @MethodHijacker()
  // sayGoodBye(){
  //   console.log('Good bye');
  // }

}
