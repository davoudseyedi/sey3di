import {Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  public onScroll($event:Event):void {
    if ( isPlatformBrowser(this.platformId) ) {
      let mainNavLinks = document.querySelectorAll("ul#navbar li a");
      let header = this.elem.nativeElement.querySelector("header");
      let fromTop = window.scrollY;

      if(fromTop > 50){
        header.classList.add('sticky')
      }else{
        header.classList.remove('sticky')
      }

      mainNavLinks.forEach((link:any) => {

        let section = document.querySelector(link.getAttribute('href')) as HTMLElement;

        if (section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop) {

          link.classList.add("active");

        } else {

          link.classList.remove("active");

        }
      });
    }
  };

  constructor(private elem: ElementRef,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
  }

  public scrollTo(e:any) {

    if ( isPlatformBrowser(this.platformId) ) {

      e.preventDefault();
      let target = document.querySelector(e.target.hash);
      const yOffset = -50;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});

    }

  }

}
