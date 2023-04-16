import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  url: string = "/assets/shoe.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
}
