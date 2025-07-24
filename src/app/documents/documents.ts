import { Component } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-documents',
  imports: [],
  templateUrl: './documents.html',
  styleUrl: './documents.scss'
})
export class Documents {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Документи | Частна занималня Кошерчето');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Изтеглете и качете необходимите документи за записване в частна занималня „Кошерчето“. Лесен достъп до формуляри и декларации.'
      },
      {
        name: 'keywords',
        content: 'документи, записване, формуляри, декларация, здравна информация, занималня Кошерчето, документи за занималня'
      }
    ]);
  }
}
