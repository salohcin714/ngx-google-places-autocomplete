import { Component } from '@angular/core';
import {Address} from "ngx-google-places-autocomplete";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  address?: Address;

  onAddressChange(address: Address) {
    this.address = address;
  }
}
