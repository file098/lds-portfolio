import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterContentInit {
  works: any = [
    { source: '../../assets/wall.jpg' },
    { source: '../../assets/wall.jpg' },
    { source: '../../assets/wall.jpg' },
    { source: '../../assets/wall.jpg' },
    { source: '../../assets/wall.jpg' },
    { source: '../../assets/wall.jpg' },
    { source: '../../assets/wall.jpg' },
    { source: '../../assets/wall.jpg' },
  ];

  ngAfterContentInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          console.log(entry.target.classList);
        } else {
          entry.target.classList.remove('show');
          console.log(entry.target.classList);
        }
      });
    });

    const hidden = document.querySelectorAll('.hidden');
    hidden.forEach((el) => observer.observe(el));
  }
}
