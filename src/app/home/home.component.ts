import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  selectedIdx = 1; // Initially selected index

  getClass(index: number): string {
    const diff = index - this.selectedIdx;
    if (diff === 0) return 'selected';
    if (diff === -1) return 'prev';
    if (diff === -2) return 'prevLeftSecond';
    if (diff === 1) return 'next';
    if (diff === 2) return 'nextRightSecond';
    return 'hide';
  }

  moveToSelected(element: string): void {
    if (element === 'prev' && this.selectedIdx > 0) {
      this.selectedIdx--;
    } else if (element === 'next' && this.selectedIdx < this.cards3.length - 1) {
      this.selectedIdx++;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        if (this.selectedIdx > 0) {
          this.moveToSelected('prev');
        }
        break;
      case 'ArrowRight':
        if (this.selectedIdx < this.cards3.length - 1) {
          this.moveToSelected('next');
        }
        break;
      default:
        return;
    }
    event.preventDefault();
  }



  cards3 = [
   
    {
      id:'03',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'images/Image7.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'04',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'images/Image8.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'05',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'images/Image9.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
 
  ];

  cards = [
    {
      id:'04',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content ',
      buttonText: 'Button',
      img: 'img/06.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'05',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'img/09.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'06',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'07',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'img/08.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'08',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'img/09.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'09',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'img/04.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },

  ];

  cards2 = [
    
    {
      id:'03',
      title: 'Make a Difference: Give back at these event ',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      calender:'images/Calendar.png',
      location:'images/Location.png',
      label:'images/GreeLabel.png',
      img: 'images/MaskGroup141190.png',
      auther:'anubhandh',
      date:'Oct 1, Sat | 7:00 PM Onwards'
    },
    {
      id:'04',
      title: 'Womens History month 2024',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      calender:'images/Calendar.png',
      location:'images/Location.png',
      label:'images/GreeLabel.png',
      img: 'images/MaskGroup1411901.png',
      auther:'anubhandh',
      date:'Oct 1, Sat | 7:00 PM Onwards'
    },
    {
      id:'05',
      title: 'Where green and GTFO at St Patricks Day Special',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      calender:'images/Calendar.png',
      location:'images/Location.png',
      label:'images/GreeLabel.png',
      img: 'images/MaskGroup1411902.png',
      auther:'anubhandh',
      date:'Oct 1, Sat | 7:00 PM Onwards'
    },
    {
      id:'06',
      title: 'Find your pride in San Francisco year-round fest',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      calender:'images/Calendar.png',
      location:'images/Location.png',
      label:'images/GreeLabel.png',
      img: 'images/MaskGroup141190@2x.png',
      auther:'anubhandh',
      date:'Oct 1, Sat | 7:00 PM Onwards'
    },

  ];
}
