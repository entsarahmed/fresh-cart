import { ProductService } from 'src/app/core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Brands } from 'src/app/core/interfaces/brands';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {


  constructor(private _ProductService:ProductService){}

brandsData:Brands[]=[]
selectedBrand: any;
  ngOnInit(): void {
      this._ProductService.getBrands().subscribe({

        next:(response)=>{
this.brandsData=response.data;

        }
      }) 
  }

  brandDetails:any=[];
  
  getId(id:any):void{
    this.selectedBrand=id._id
    console.log(this.selectedBrand);
    this._ProductService.getBrandsDetails(this.selectedBrand).subscribe({
      next:(response)=>{
this.brandDetails=response.data;
console.log(this.brandDetails);
      }
    })     
  }



}
