import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  tracksTrending:Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservers$:Array<Subscription> = [];

  constructor(private trackService:TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  //Since this subscriptions are related to the HttpClient angular handles the
  //unsubcription for us then the component get destroyed
  loadDataAll():void{
    const  dataRaw =this.trackService.getAllTracks$().subscribe((response: TrackModel[]) =>{
      this.tracksTrending = response;
    });
  }

  loadDataRandom():void{
    this.trackService.getAllRandom$().subscribe((response: TrackModel[]) =>{
      this.tracksRandom = response;
    });
  }

  ngOnDestroy(): void {

  }
}

