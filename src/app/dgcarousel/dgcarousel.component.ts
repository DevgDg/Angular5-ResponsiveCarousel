import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-dgcarousel', templateUrl: './dgcarousel.component.html', styleUrls: ['./dgcarousel.component.scss']})
export class DgcarouselComponent implements OnInit {
  images : Array < any > = [];
  selectedImage : string;
  counter : number = 0;
  constructor() {
    this.images = [
      {
        image: '../../assets/images/travel/Banff.jpeg',
        title: 'Banff, Alberta',
        details: "This Canadian destination will bring out the explorer in anyone who visits. From hiking and whitewater rafting to skiing and snowboarding, Banff offers travelers an abundance of year-round outdoor activities. The Lake Louise Ski Resort is one of the largest in North America and the striking photo ops of the Canadian Rockies from Moraine Lake can't be underestimated."
      },
      { 
        image: '../../assets/images/travel/ParkCity.jpeg',
        title: 'Park City, Utah',
        details: "For a luxury ski vacation, look no further than Park City. Popular upscale mountain resorts, specifically Deer Valley and Park City Mountain, provide some of the best ski conditions in the U.S. Even if you're not a powder hound, sites like the Guardsman Pass Scenic Backway and Utah Olympic Park will keep you entertained. For a dose of culture, plan your visit in January, when celebrities descend on the town for the annual Sundance Film Festival."
      },
      { 
        image: '../../assets/images/travel/VirginIslands.jpeg',
        title: 'The British Virgin Islands',
        details: "One look at the aquamarine waters that surround the British Virgin Islands and you'll see why they're consistently rated a top Caribbean destination. Sure, other islands have white sand beaches too, but the British Virgin Islands aren't crowded with megaresorts or cruise ports. Instead, the chain of 60 islands values exclusivity and luxury, so you'll want to bring your credit card along."
      },
      { 
        image: '../../assets/images/travel/NationalPark.jpeg',
        title: 'Yosemite National Park',
        details: "There's no shortage of magnificent photo ops in this California national park, but you'll have to climb to reach the best vantage points. Famous hiking trails include the daunting Half Dome and the high altitude (but more accessible) Glacier Point lookout. Never fear – if heights aren't your thing, there are plenty of less strenuous options found along Mist Trail and Tuolumne Meadows."
      },
      { 
        image: '../../assets/images/travel/Tahiti.jpeg',
        title: 'Tahiti, French Polynesia',
        details: "From luxurious bungalows suspended over clear turquoise waters to lush vegetation and stunning waterfalls, Tahiti is all about basking in the colorful landscape. The largest island in French Polynesia is ideal for those seeking solitude, but areas like La Plage de Maui and Plage du Taharuu are also popular with tourists."
      },
      { 
        image: '../../assets/images/travel/Phuket.jpeg',
        title: 'Phuket, Thailand',
        details: "The largest island in Thailand boasts enough marvels to impress any traveler. You'll find wide sandy beaches, limestone caves and distinctive rock formations. If the scenery doesn't amaze you, then the lavish spas, upscale dining, fine art galleries and swanky hotels just might. Visit during the dry season (November to April) to experience both indoor and outdoor attractions at their best. "
      },
      { 
        image: '../../assets/images/travel/Vancouver.jpeg',
        title: 'Vancouver, British Columbia',
        details: "An easy hop over the border from Seattle, this Canadian city embraces the great outdoors. Hiking, skiing and whitewater rafting are just a few activities visitors can enjoy. What's more, attractions such as Stanley Park (home to a water park and the Vancouver Aquarium) and Granville Island make Vancouver a great choice for families. Pop culture aficionados will also appreciate the city's connection to Hollywood movies. "
      }, 
      { 
        image: '../../assets/images/travel/Serengeti.jpeg',
        title: 'Serengeti National Park',
        details: "Serengeti National Park offers an unparalleled experience for travelers. Located in northern Tanzania, the 5,700-square-mile wildlife park is home to The Great Migration – the annual movement of millions of animals in search of food and breeding grounds. Keep your eyes peeled for herds of zebras, gazelles, baboons and spotted hyenas, just to name a few. Increase your chances of catching a glimpse of wildlife by visiting the southern part of the park during the wet season (December to June) or staying along the northern Seregenti during the dry season (July to November). "
      },
      { 
        image: '../../assets/images/travel/Bali.jpeg',
        title: 'Bali, Indonesia',
        details: "Ancient temples, imposing landscapes and legendary sunsets are enough for any traveler to daydream of Bali. This Indonesian island offers some of the best beaches in the world, along with volcanic mountains, elephant sanctuaries and a wealth of five-star resorts. Getting here isn't cheap, but travelers seeking seclusion in an exotic locale agree it's worth the trek for the photo ops alone.  "
      },
      { 
        image: '../../assets/images/travel/GrandCanyon.jpeg',
        title: 'Grand Canyon',
        details: "No photos of the Grand Canyon can convey the sheer magnitude of this natural wonder, which measures 277 miles long, up to 18 miles wide and more than a mile deep. Nearly 6 million people visited the national park in 2016 to take in the grandeur of the red and orange formation. There are plenty of ways to enjoy this UNESCO World Heritage site: Travelers can hike the North Rim, horseback ride on the Bright Angel Trail or raft down the Colorado River, among other pursuits.  "
      },
    ]
  }
  ngOnInit() {
    this.selectedImage = this.images[5];
  }

  nextFunc() : void {
    this.counter = this
      .images
      .indexOf(this.selectedImage);
 
    if ((this.counter + 1) != this.images.length) {
      this.selectedImage = this.images[this.counter + 1];
    }
  }
  prevFunc() : void {
   this.counter = this
      .images
      .indexOf(this.selectedImage);
 
    if ((this.counter - 1) != -1) {
      this.selectedImage = this.images[this.counter - 1];
    } 
  }
  dotClicked(i : string) : void {
     this.selectedImage = this.images[i];
  }
}
