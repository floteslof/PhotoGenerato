import { Component, Input } from '@angular/core';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  

  submitSearch(event: Event) {
    event.preventDefault();

    console.log(ImagePopupComponent);
  }
}
