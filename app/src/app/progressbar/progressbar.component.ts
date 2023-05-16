import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
    progress: number = 0;
    label: string = '0%';
    interval: any;

    ngOnInit() {
      this.startProgressTimer();
    }

    startProgressTimer() {
      this.interval = setInterval(() => {
        // Update the progress value
        this.progress += 10;
        
        // Stop the timer when progress reaches 100
        if (this.progress > 100) {
          this.progress = 0;
        }

        this.label = this.progress + '%';
      }, 200); // Change the interval time as per your requirement
    }
}
