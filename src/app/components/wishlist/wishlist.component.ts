import { CartService } from './../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from './../../core/services/wishlist.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from 'src/app/core/interfaces/product';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private _WishlistService:WishlistService,private _ToastrService:ToastrService,private _Renderer2:Renderer2,private  _CartService:CartService){}

  products:product[]=[];
  wishlistData:string[]=[];


  ngOnInit(): void {
      this._WishlistService.getWishList().subscribe({
        next:(response)=>{
         this.products= response.data;
         const newData =response.data.map((item:any)=> item._id);
    this.wishlistData=newData;
        }
      })
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
    }
    })
    }
    
removeFav(id:string|undefined):void{
  this._WishlistService.removeWishlist(id).subscribe({
    next:(response)=>{
console.log(response);
this._ToastrService.success(response.message)
this.wishlistData=response.data;
// this._WishlistService.getWishList().subscribe({
//   next:(response)=>{
// this.products=response.data;
//   }
// })   

const newProductData=this.products.filter((item:any)=> this.wishlistData.includes(item._id))
this.products=newProductData;
}
  })
}
}
