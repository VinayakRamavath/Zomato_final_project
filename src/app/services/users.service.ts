import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService{
    idd:any;
    url_put='http://localhost:8080/v1.0/FavouriteService/Favourites/';
    url='http://localhost:8080/v1.0/FavouriteService/Favourites/';
    private headers = new Headers({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    constructor(private http: Http){}

    getUsersRestaurants(): Promise<void> {
        return this.http.get('http://localhost:8080/v1.0/FavouriteService/Favourites')
                        .toPromise()
                        .then((res)=>res.json(),
                              (err)=>err.json())
      }
      //converted promise type to void from string
      addUsersRestaurants(res): Promise<void> {
        console.log(res.restaurant.name);
        console.log(res.restaurant.id);
        return this.http.post('http://localhost:8080/v1.0/FavouriteService/Favourites',JSON.stringify({
                        id: res.restaurant.id,
                        name: res.restaurant.name,
                        featured_image:res.restaurant.featured_image,
                        cuisines:res.restaurant.cuisines,
                        average_cost_for_two:res.restaurant.average_cost_for_two,
                        rating:res.restaurant.user_rating.aggregate_rating,
                        comments:null
                      }),{headers: this.headers})
                 .toPromise()
                 .then(
                       (err)=>console.log(err))
                 .catch((ress) =>console.log("error caught",ress))
      }

      deleteUsersRestaurant(id): Promise<void> {
          console.log(id);
          console.log({id});
        // return this.http.delete(`/Favourites/${id}`)
        return this.http.delete(this.url+id)
                        .toPromise()
                        .then(
                              (err)=>console.log(err))

                  //   .then((res)=>res.json(),
                  //   (err)=>err.json())
                        // .catch((res) =>console.log("error caught",res))
      }

      updateUsersRestaurant(idd,res,comments): Promise<void> {
          // return this.http.delete(`/Favourites/${id}`)
          console.log("Commnets", comments);
          return this.http.put(this.url_put+idd+"?comments="+comments,JSON.stringify({
            id: res.id,
            name: res.name,
            featured_image:res.featured_image,
            cuisines:res.cuisines,
            average_cost_for_two:res.average_cost_for_two,
            rating:res.aggregate_rating,
            comments:comments
          }),{headers: this.headers})
                          .toPromise()
                          .then(()=>res,
                                (err)=>console.log(err))
                                
  
                    //   .then((res)=>res.json(),
                    //   (err)=>err.json())
                          // .catch((res) =>console.log("error caught",res))
        }

}    