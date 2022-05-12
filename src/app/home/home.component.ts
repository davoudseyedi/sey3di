import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public options:any = {
    path: '/assets/animation/developer.json',
    loop: true,
    autoplay: true
  }
  public options2:any = {
    path: '/assets/animation/development-programer.json',
    loop: true,
    autoplay: true
  }

  public projects: any[] = [
    { id: 1, title: 'Sophia Roma', category: 'web',image: '/assets/images/sophia.png',url: 'https://sophiaroma.com' },
    { id: 2, title: 'Technoajor', category: 'web',image: '/assets/images/techno.png',url: 'https://technoajor.com'  },
    { id: 3, title: 'Sepandab', category: 'web',image: '/assets/images/sepandab.png',url: 'https://sepandab.com'  },
    { id: 3, title: 'Abniyehkar', category: 'web',image: '/assets/images/abniye.png',url: 'https://abniyehkar.com'  },
    { id: 3, title: 'Abniehrahbord', category: 'web',image: '/assets/images/abniye2.png' ,url: 'https://abniehrahbord.com' },
    { id: 3, title: 'Bita Ghabaian', category: 'web',image: '/assets/images/bita.png',url: 'https://bitaghabaian.com'  },
    { id: 3, title: 'Daadsolutions', category: 'web',image: '/assets/images/daad.png',url: 'https://daadsolutions.com'  },
    { id: 3, title: 'Lebina Restaurant', category: 'web',image: '/assets/images/lebina.png',url: 'https://lebiina.ir'  },
    { id: 3, title: 'Buy Bitumen', category: 'web',image: '/assets/images/bitumen.png',url: 'http://buy-bitumen.ir'  },
    { id: 3, title: 'Topcarclub', category: 'web',image: '/assets/images/topcar.png',url: 'http://topcarclub.com'  },
    { id: 3, title: 'Rhodes Art Studio', category: 'web',image: '/assets/images/rhodes.png',url: 'http://rhodesartstudio.com'  },
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
