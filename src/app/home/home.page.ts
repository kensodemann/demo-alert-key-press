import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private alertController: AlertController) {}

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
