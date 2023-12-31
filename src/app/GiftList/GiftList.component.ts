import { Component, OnInit } from '@angular/core';
import * as imagebools from '../resources/img-bools.json';
import { HttpClient } from '@angular/common/http';
import { FetchGiftDataService } from '../FetchGiftData.service';
import * as names from '../resources/imagenes-names.json';

@Component({
  selector: 'app-GiftList',
  templateUrl: './GiftList.component.html',
  styleUrls: ['./GiftList.component.css'],
})
export class GiftListComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private giftService: FetchGiftDataService
  ) {}
  imagez = 'assets/img/tapy.png';
  imageNames: any = [];
  imageVisible: any = [];
  itemList: any = [];
  displayedCols: string[] = [
    'Apartado',
    'Producto:',
    'Cantidad',
    'Quien regala:',
    'Nota extra:',
    'Confirmar',
  ];
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
    console.log('fetching data ...');
    this.sampleData();
    if (this.itemList.length == 0) {
      var dummy = {
        id: 1,
        name: 'Rayador',
        available: true,
        giftby: '',
        note: '',
        amount: 1,
      };
      this.itemList.push(dummy);
    }
    for (let i in imagebools) {
      this.imageVisible.push(imagebools[i]);
    }
    for (let i in names) {
      this.imageNames.push(names[i]);
    }
  }

  imgHover() {
    console.log('looking ..');
  }
  saveChange(event: any) {
    let id = Number((event.target.id + '').substring(4));
    this.itemList[id - 1].giftby = (
      document.getElementById('who-' + id) as HTMLInputElement
    ).value;
    if (
      this.itemList[id - 1].giftby !== '' &&
      this.isEmpty(this.itemList[id - 1].giftby)
    ) {
      this.itemList[id - 1].note = (
        document.getElementById('note-' + id) as HTMLInputElement
      ).value;
      this.itemList[id - 1].available = !this.itemList[id - 1].available;
      this.giftService.saveData(this.itemList);
      this.fixInputs(id);
    } else {
      (document.getElementById('who-' + id) as HTMLInputElement).value = '';
    }
  }

  fixInputs(id: number) {
    (document.getElementById('who-' + id) as HTMLInputElement).value =
      '-- secreto --';
    (document.getElementById('note-' + id) as HTMLInputElement).value =
      'gracias por su aportacion!!';
  }

  isEmpty(str: string): boolean {
    return str.trim().length > 0;
  }
}
