import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-prices-and-documents',
  imports: [CommonModule],
  templateUrl: './prices-and-documents.html',
  styleUrl: './prices-and-documents.scss'
})
export class PricesAndDocuments {
  packageTitle = 'Пакети';
  packages = [
    {
      name: 'Еднократно посещение',
      price: '40 лв.',
      details: [
        'Идеален за еднократно посещение или пробeн ден',
        'Компетентна помощ за домашни и уроци',
        'Занимания и игри до края на деня',
      ]
    },
    {
      name: 'Седмичен абонамент',
      price: '175 лв.\n(по 35 лв. на ден)',
      details: [
        'Помощ с домашни и уроци за цялата седмица',
        'Допълнителни занимания',
        'Участие в логически игри',
        'Индивидуална обратна връзка'
      ]
    },
    {
      name: 'Месечен абонамент',
      price: '600 лв.\n(≈ 30 лв. на ден)',
      details: [
        'Неограничен достъп за целия месец',
        'Помощ за домашни и подготовка за училище',
        'Разширени занимания по интереси',
        'Ежедневна комуникация с родителите',
        '10% отстъпка за второ дете от семейството',
      ]
    }
  ];
}
