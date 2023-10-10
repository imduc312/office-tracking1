import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  status: string = '';

  name!: string;
  selectedData: any;
  cancel() {
    this.isOpen = !this.isOpen;
  }

  confirm() {
    const dataFromSelectConfim = this.selectedData;

    // console.log(dataFromSelectConfim);
    // console.log('=status===================================');
    // console.log('this.status', this.status);
    // console.log('======status==============================');

    this.selectedData.morning = this.status;
  }
  selectStatus(selected: any) {
    this.selectedData = selected;
  }
  constructor() {}

  getColor(text: string) {
    return text === 'Office'
      ? 'warning'
      : text === 'Online'
      ? 'success'
      : text === 'Offline'
      ? 'danger'
      : '';
  }

  // onclick
  isOpen: boolean = false;
  onClickOpenModal(isOpen: boolean, selectedData: any) {
    this.isOpen = isOpen;
    this.selectedData = selectedData;
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
          evening: 'Offline',
        },
        {
          dayNumber: '03',
          dayText: 'Tus',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '04',
          dayText: 'Wed',
          morning: 'Online',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '05',
          dayText: 'Thu',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '06',
          dayText: 'Fri',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Online',
        },
        {
          dayNumber: '07',
          dayText: 'Sat',
          morning: 'Online',
          afternoon: 'Online',
          evening: 'Offline',
        },

        {
          dayNumber: '08',
          dayText: 'Sun',
          morning: 'Online',
          afternoon: 'Offline',
          evening: 'Offline',
        },
      ],
      selectedStatus: '', // Thêm trạng thái được chọn cho mỗi phần tử
    },
  ];
}
