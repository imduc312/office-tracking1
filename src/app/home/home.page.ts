import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  name!: string;
  status: string = '';
  selectedData: any;
  option: string = '';
  slot: string = ''; // click vào -> nhận được buổi khi sellect

  // Click open modal
  isOpen: boolean = false;
  onClickButtonDay(isOpen: boolean, selectedData: any, slot: any) {
    this.isOpen = isOpen;
    this.selectedData = selectedData;
    this.slot = slot;
  }
  //
  ReturnResult(event: any) {
    this.isOpen = !this.isOpen; // false
    const status = event.detail.data.status; //  lấy status(select được chọn)
    this.status = status;

    if (status === 'Cancel') {
      return; // cancel
    }

    switch (this.slot) {
      case 'morning':
        this.selectedData.morning = this.status;
        // trạng thái morning = dữ liệu được chọn
        break;

      case 'afternoon':
        this.selectedData.afternoon = this.status;
        // trạng thái afternoon = dữ liệu được chọn
        break;

      case 'evening':
        this.selectedData.evening = this.status;
        // trạng thái evening = dữ liệu được chọn
        break;

      default:
        break;
    }
  }
  constructor() {}

  // Set color cho status của từng buổi
  getColor(text: string) {
    let color;
    switch (text) {
      case 'Online':
        color = 'success';
        break;
      case 'Offline':
        color = 'danger';
        break;
      case 'Office':
        color = 'medium';
        break;
      default:
    }
    return color;
  }

  dailies = [
    {
      user: {
        avatar:
          'https://lh3.googleusercontent.com/a/ACg8ocIhAMTa1Zfo_9EXA67v0ICHaChKnpltNnHzj2d1JznyQuE=s360-c-no',
        name: 'Le Van A',
      },
      schedules: [
        {
          dayNumber: '02',
          dayText: 'Mon',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Online',
        },
        {
          dayNumber: '03',
          dayText: 'Tus',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Online',
        },
        {
          dayNumber: '04',
          dayText: 'Wed',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '05',
          dayText: 'Thu',
          morning: 'Online',
          afternoon: 'Online',
          evening: 'Offline',
        },
        {
          dayNumber: '06',
          dayText: 'Fri',
          morning: 'Office',
          afternoon: 'Online',
          evening: 'Offline',
        },
        {
          dayNumber: '07',
          dayText: 'Sat',
          morning: 'Online',
          afternoon: 'Office',
          evening: 'Offline',
        },

        {
          dayNumber: '08',
          dayText: 'Sun',
          morning: 'Online',
          afternoon: 'Office',
          evening: 'Offline',
        },
      ],
      selectedStatus: '', // Thêm trạng thái được chọn cho mỗi phần tử
    },
    {
      user: {
        avatar:
          'https://lh3.googleusercontent.com/a/ACg8ocIhAMTa1Zfo_9EXA67v0ICHaChKnpltNnHzj2d1JznyQuE=s360-c-no',
        name: 'Le Van A',
      },
      schedules: [
        {
          dayNumber: '02',
          dayText: 'Mon',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Online',
        },
        {
          dayNumber: '03',
          dayText: 'Tus',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Online',
        },
        {
          dayNumber: '04',
          dayText: 'Wed',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '05',
          dayText: 'Thu',
          morning: 'Online',
          afternoon: 'Online',
          evening: 'Offline',
        },
        {
          dayNumber: '06',
          dayText: 'Fri',
          morning: 'Office',
          afternoon: 'Online',
          evening: 'Offline',
        },
        {
          dayNumber: '07',
          dayText: 'Sat',
          morning: 'Online',
          afternoon: 'Office',
          evening: 'Offline',
        },

        {
          dayNumber: '08',
          dayText: 'Sun',
          morning: 'Online',
          afternoon: 'Office',
          evening: 'Offline',
        },
      ],
      selectedStatus: '', // Thêm trạng thái được chọn cho mỗi phần tử
    },
  ];

  //status
  public actionSheetButtons = [
    {
      cssClass: 'online-button',
      text: 'Online',
      data: {
        status: 'Online',
      },
    },
    {
      cssClass: 'offline-button',
      text: 'Offline',
      data: {
        status: 'Offline',
      },
    },
    {
      cssClass: 'office-button',
      text: 'Office',
      data: {
        status: 'Office',
      },
    },
    {
      cssClass: 'cancel-button',
      text: 'Cancel',
      role: 'cancel',
      data: {
        status: 'Cancel',
      },
    },
  ];
}
