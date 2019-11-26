import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  async showBigAlert() {
    const alert = await this.alertController.create({
      header: 'This is Bob',
      message:
        'My name is Bob. I am very loquacious, which means that I talk. A lot. This also means that I have a tendency to drive Ken nuts. ' +
        'You see, Ken likes people who do not talk much. His ideal situation would be to date a librarian and then go to a library ' +
        'where they could both just sit and read and not talk to one another. In the eyes of Ken, this would be an ideal date. ' +
        'Ken is a very weird guy and this is why he finds me very anoying.',
      buttons: ['Disagree', 'Agree']
    });
    alert.present();
  }

  async showSmallAlert() {
    const alert = await this.alertController.create({
      header: 'This is Ken',
      message: 'Hey Bob, please shut up.',
      buttons: ['Disagree', 'Agree']
    });
    alert.present();
  }

  async getData() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name6',
          type: 'number'
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          role: 'doit'
        }
      ]
    });

    await alert.present();
    alert.onkeyup = ev => console.log(ev.keyCode);
    const firstInput: any = document.querySelector('ion-alert input');
    firstInput.focus();
  }
}
