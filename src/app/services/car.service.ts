import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44337/api/';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/carDetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getcardetailbyid(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/GetCarDetailById?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

 getCarByBrandId(brandId:number){
  let newPath = this.apiUrl + "cars/carsDetailsByBrandId?brandId=" + brandId;
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
 }
}
