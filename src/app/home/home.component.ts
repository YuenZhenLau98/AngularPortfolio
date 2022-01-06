import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: {
        timing: 3,
        delay: 0,
        a: '3000px',
        b: '-25px',
        c: '10px',
        d: '-5px',
      }
    }))])
  ]
})
export class HomeComponent implements OnInit {
  public bounce: number = 1;
  public navigationID: string[] = ["Home", "About", "Experience", "Works"];
  
  constructor(public router: Router) { 
    setInterval(() => {
      this.bounce = this.bounce < 3 ? this.bounce + 1 : 1;
    }, 3000);
  }

  ngOnInit(): void 
  {

  }

  navigateToHome()
  {
    this.router.navigate(['/home'], { fragment: 'home' });
  }

  navigateToAbout()
  {
    this.router.navigate(['/home'], { fragment: 'about' });
  }

  navigateToExperience()
  {
    this.router.navigate(['/home'], { fragment: 'experience' });
  }

  navigateToWork()
  {
    this.router.navigate(['/home'], { fragment: 'work' });
  }

  navigateToWorkShowCase(title: string)
  {
    let navigationExtras: NavigationExtras = 
    {
      state:
      {
        workTitle : title
      }
    };

    this.router.navigateByUrl('/work', navigationExtras);
  }

}
