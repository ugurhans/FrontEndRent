import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetailDto';

import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';

import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  cardetails:CarDetail[]=[];
  dataLoaded = false;
  isDetail = false;
  
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
 
  }



  

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
      this.isDetail = true;
    });
  }
  getCarByBrandId(brandId:number){
    this.carService.getCarByBrandId(brandId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
      this.isDetail = true;
    });
   }

   getCarByColorId(colorId:number){
    this.carService.getCarByBrandId(colorId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
      this.isDetail = true;
    });
   }
}
