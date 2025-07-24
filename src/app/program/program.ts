import { Component } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-program',
  imports: [],
  templateUrl: './program.html',
  styleUrl: './program.scss'
})
export class Program {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Програма | Частна занималя Кошерчето');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Запознайте се с дневната програма в частна занималня „Кошерчето“ – учебни и творчески дейности, игри, отдих и пълноценна грижа за децата.'
      },
      {
        name: 'keywords',
        content: 'програма, дневен режим, занимания, учебна програма, занималня, деца, игри, дейности, Кошерчето'
      }
    ]);
  }
}
