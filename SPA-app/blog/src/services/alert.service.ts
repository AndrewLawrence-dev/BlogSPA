import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(message: string) {
    this.showAlert(message, this.getSuccessAlertClass());
  }

  failure(message: string) {
    this.showAlert(message, this.getFailureAlertClass());
  }

  private getAlertMessageID() {
    return 'alert_msg';
  }

  private getSuccessAlertClass() {
    return 'alert_msg_success';
  }

  private getFailureAlertClass() {
    return 'alert_msg_failure';
  }

  private showAlert(message: string, alert_class: string) {
    const alert_node      = document.createElement('div');
    let alert_text_node   = document.createTextNode(message);
    const nav_elm         = document.querySelector('nav');

    alert_node.id        = this.getAlertMessageID();
    alert_node.className = alert_class;
    alert_node.appendChild(alert_text_node);

    nav_elm.appendChild(alert_node);

    let appear_for_seconds = 5;

    const alert_interval = setInterval(function (appear_for_seconds_countdown) {
      return function () {
        appear_for_seconds_countdown--;

        if (appear_for_seconds_countdown == 0) {
          alert_node.remove();
          clearInterval(alert_interval);
        }
      }
    }(appear_for_seconds), 1000);
  }
}
