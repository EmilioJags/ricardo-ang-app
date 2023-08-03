import { Component, OnInit } from '@angular/core';
import * as myData from '../resources/gifts.json';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DataInterface } from '../model/dataInterface';
import { FetchGiftDataService } from '../FetchGiftData.service';
import { GiftModel } from '../model/GiftModel';

@Component({
  selector: 'app-GiftList',
  templateUrl: './GiftList.component.html',
  styleUrls: ['./GiftList.component.css'],
})
export class GiftListComponent implements OnInit {
  private url = 'http://localhost:8080/api/casita/1';
  constructor(
    private http: HttpClient,
    private giftService: FetchGiftDataService
  ) {}

  itemList: any = [];
  data = myData;
  displayedCols: string[] = ['Objeto(s)', 'Regalado por:', 'Nota extra:'];
  res: string = '';
  obj: any = {};
  sampleData() {
    setTimeout(() => {
      this.giftService.getData().then((data) => {
        data.forEach((x) => {
          this.res = JSON.stringify(x);
          this.itemList = JSON.parse(this.res);
          this.itemList.forEach((x) => {
            x.note = '';
          });
        });
      });
    }, 1);
  }

  ngOnInit() {
    this.sampleData();
  }

  saveChange(event: any) {
    let id = Number((event.target.id + '').substring(4));
    if (this.itemList[id - 1].giftby !== '') {
      this.itemList[id - 1].available = !this.itemList[id - 1].available;
      (document.getElementById('who-' + id) as HTMLInputElement).value =
        '-- secreto --';
      console.log(this.itemList);
      this.giftService.saveData(this.itemList);
      (document.getElementById('note-' + id) as HTMLInputElement).value =
      'gracias por su aportacion!!';
    }
  }
  onKeyWho(event: any) {
    let id = Number(event.target.id.substring(4)) - 1;
    this.itemList[id].giftby = event.target.value;
  }
  onKeyNote(event: any) {
    let id = Number(event.target.id.substring(4)) - 1;
    if (typeof this.itemList[id].note === undefined)
      this.itemList[id].note = '';
    this.itemList[id].note = event.target.value;
    console.log(this.itemList[id].note);
  }
}
