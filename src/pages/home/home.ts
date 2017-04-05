import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FetchMovie} from "../../providers/fetch-movie";
import {DescriptionPage} from "../description/description";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[FetchMovie],
})
export class HomePage {

  public tabItem;
  public tabItembool;
  public value=1;
  public movies=[];
  public jsonMovie={};
  public random=[];


  constructor(public navCtrl: NavController,public movie:FetchMovie) {
  this.ionViewdidLoad();
  }
  ionViewdidLoad(){
    this.tabItem="UPCOMINGS";
    console.log("LOADED IONVIEW")
  }






  public fetchPopulars(){
    this.tabItem="POPULAR";
    this.movie.fetchPopular().subscribe(data =>
    {
      this.jsonMovie=data.results;
      this.random=Object.keys(this.jsonMovie);

    } );
    console.log(this.jsonMovie);

  }
  ionViewWillEnter(){
    this.fetchUpcomings();
    console.log("THIS IS RUN");
  }
  public fetchUpcomings(){
    this.movie.fetchUpcoming().subscribe(data=>{
      this.tabItem="UPCOMINGS";
      this.jsonMovie=data.results;
      this.random=Object.keys(this.jsonMovie);

    });
  }
  public description(value){
    console.log(value);
    this.navCtrl.push(DescriptionPage,{
      param1: value});
  }
}
