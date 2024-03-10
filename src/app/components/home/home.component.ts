import { WishlistService } from './../../core/services/wishlist.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { product } from 'src/app/core/interfaces/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { Category } from 'src/app/core/interfaces/Category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink,RouterLinkActive,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private _WishlistService:WishlistService,private _ProductService:ProductService, private _CartService:CartService, private _ToastrService:ToastrService, private _Renderer2:Renderer2){}
term:string=''
products:product[]=[];
catgories:Category[]=[];
wishlistData:string[]=[];
ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(response)=>{
this.products=response.data;

      },
      error:(err)=>{
console.log(err);
      }
    });

    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        this.catgories=response.data;
console.log('category' , response.data);
      }
    });

    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
    const newData =response.data.map((item:any)=> item._id);
    this.wishlistData=newData;
      }
    });
}

categoryOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:2000,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: false
}



mainSlideOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:2000,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  
  nav: false
}

addProduct(id:any,element:HTMLButtonElement):void{

this._Renderer2.setAttribute(element,'disabled','true')

  this._CartService.addToCart(id).subscribe({
  next:(response)=>{
console.log(response);
console.log(response.message);
this._ToastrService.success(response.message)
this._Renderer2.removeAttribute(element,'disabled');
this._CartService.cartNumber.next(response.numOfCartItems); 


},
  error:(err)=>{
    this._Renderer2.removeAttribute(element,'disabled');

  }
})
}


addFav(prodId:string|undefined):void{
this._WishlistService.addToWishList(prodId).subscribe({
  next:(response)=>{
console.log(response);
this._ToastrService.success(response.message)
 
this.wishlistData=response.data;

// this._WishlistService.wishlistNum.next(response.numOfCartItems);
}
})
}

removeFav(id:string|undefined):void{
  this._WishlistService.removeWishlist(id).subscribe({
    next:(response)=>{
console.log(response);
this._ToastrService.success(response.message)
this.wishlistData=response.data;    
}
  })
}

}
