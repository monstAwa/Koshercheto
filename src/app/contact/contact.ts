import { Component } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(private title: Title, private meta: Meta) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Свържете се с частна занималня „Кошерчето“. Адрес, телефон, имейл и форма за контакт. Очакваме ви с усмивка!'
      },
      {
        name: 'keywords',
        content: 'контакти, занималня адрес, Кошерчето контакти, частна занималня, детска занималня, детска грижа, телефон на занималня'
      }
    ]);
  }
}
