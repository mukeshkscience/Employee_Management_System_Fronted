import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  onSubmit(form: any) {
    console.log('Form Data:', form.value);
    // Implement your logic to send data, like calling an API
  }

}
