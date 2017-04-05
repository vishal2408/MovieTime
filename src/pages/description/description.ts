import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FetchMovie} from "../../providers/fetch-movie";

/*
  Generated class for the Description page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
  providers:[FetchMovie],

})
export class DescriptionPage {

  public movies=[];
  public value;

  constructor(public navCtrl: NavController, public navParams: NavParams,public movie:FetchMovie) {
    this.fetchUpcomings();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
    this.value=this.navParams.get("param1");
    console.log(this.value);
  //  this.movies=this.movie.movies;


  }
  public fetchUpcomings(){
        this.movie.fetchUpcoming().subscribe(data=>{
      this.movies=data.results;
      console.log(this.movies);
    });
  }

}
