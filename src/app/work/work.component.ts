import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  eposData = [
    {
      srcUrl: 'assets/Images/Epos.jpg',
      previewUrl: 'assets/Images/Epos.jpg'
    },
    {
      srcUrl: 'assets/Images/epos2.jpg',
      previewUrl: 'assets/Images/epos2.jpg'
    },
    {
      srcUrl: 'assets/Images/epos3.jpg',
      previewUrl: 'assets/Images/epos3.jpg'
    },
    {
      srcUrl: 'assets/Images/epos4.jpg',
      previewUrl: 'assets/Images/epos4.jpg'
    },
    {
      srcUrl: 'assets/Images/epos5.jpg',
      previewUrl: 'assets/Images/epos5.jpg'
    },
    {
      srcUrl: 'assets/Images/epos6.jpg',
      previewUrl: 'assets/Images/epos6.jpg'
    }
  ];

  dntData = [
    {
      srcUrl: 'assets/Images/d&t.png',
      previewUrl: 'assets/Images/d&t.png'
    },
    {
      srcUrl: 'assets/Images/dnt2.jpg',
      previewUrl: 'assets/Images/dnt2.jpg'
    },
    {
      srcUrl: 'assets/Images/dnt3.jpg',
      previewUrl: 'assets/Images/dnt3.jpg'
    },
    {
      srcUrl: 'assets/Images/dnt4.jpg',
      previewUrl: 'assets/Images/dnt4.jpg'
    },
    {
      srcUrl: 'assets/Images/dnt5.jpg',
      previewUrl: 'assets/Images/dnt5.jpg'
    },
    {
      srcUrl: 'assets/Images/dnt6.jpg',
      previewUrl: 'assets/Images/dnt6.jpg'
    }
  ];
  
  labyrinthData = [
    {
      srcUrl: 'assets/Images/2dmaze.png',
      previewUrl: 'assets/Images/2dmaze.png'
    },
    {
      srcUrl: 'assets/Images/maze2.jpg',
      previewUrl: 'assets/Images/maze2.jpg'
    },
    {
      srcUrl: 'assets/Images/maze3.jpg',
      previewUrl: 'assets/Images/maze3.jpg'
    },
    {
      srcUrl: 'assets/Images/maze4.jpg',
      previewUrl: 'assets/Images/maze4.jpg'
    },
    {
      srcUrl: 'assets/Images/maze5.jpg',
      previewUrl: 'assets/Images/maze5.jpg'
    },
    {
      srcUrl: 'assets/Images/maze6.jpg',
      previewUrl: 'assets/Images/maze6.jpg'
    }
  ];

  eposItems: GalleryItem[] = this.eposData.map(item =>
    new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  );

  dntItems: GalleryItem[] = this.dntData.map(item =>
    new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  );

  labyrinthItems: GalleryItem[] = this.labyrinthData.map(item =>
    new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  );

  public workTitle: string;

  constructor(public lightbox: Lightbox, public gallery: Gallery, public router: Router, public activatedRoute: ActivatedRoute) 
  { 
    this.activatedRoute.queryParams.subscribe(params => 
    {
        if (this.router.getCurrentNavigation().extras.state) 
        {
          this.workTitle = this.router.getCurrentNavigation().extras.state.workTitle;
          this.filterGallery();
        }
    });
  }

  ngOnInit(): void 
  {
  }

  filterGallery()
  {
    switch(this.workTitle)
    {
      case "EPOS":
        this.gallery.ref().load(this.eposItems);
        break;

      case "DNT":
        this.gallery.ref().load(this.dntItems);
        break;

      case "Labyrinth":
        this.gallery.ref().load(this.labyrinthItems);
        break;
    }
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

  navigateBackToWorkList()
  {
    this.router.navigate(['/home'], { fragment: 'work' });
  }

}
