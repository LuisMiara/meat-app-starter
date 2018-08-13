import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from './restaurant.model';
import { MEAT_API } from '../../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ErrorHandler } from './../../app.error-handler';

@Injectable()
export class RestaurantService {

    constructor(
        private http: Http
    ) { }

    restaurants(): Observable<Restaurant[]> {
        try {
            return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json());
        } catch (error) {
            // tslint:disable-next-line:no-unused-expression
            ErrorHandler.handleError;
        }
    }
}
