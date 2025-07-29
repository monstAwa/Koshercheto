import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Meta } from "@angular/platform-browser";
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-sendMessage',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sendMessage.html',
  styleUrl: './sendMessage.scss'
})

export class sendMessage {
form: FormGroup;
success = false;

  constructor(private fb: FormBuilder, private meta: Meta) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    this.meta.addTags([
      //Мета тагове за SEO
      {
        name: 'description',
        content: 'Свържете се с нас чрез формата за съобщения. Пишете ни директно от сайта на частна занималня „Кошерчето“ – отговаряме с грижа и внимание.'
      },
      {
        name: 'keywords',
        content: 'контакт, съобщение, форма за контакт, изпрати съобщение, връзка с нас, Кошерчето, детска занималня, частна занималня'
      },
      // Open Graph тагове за секция "Изпратете съобщение"
      { property: 'og:title', content: 'Изпратете съобщение | Частна занималня Кошерчето' },
      { property: 'og:description', content: 'Пишете ни директно от сайта на частна занималня „Кошерчето“ за въпроси и запитвания. Очакваме ви!' },
      { property: 'og:image', content: 'https://koshercheto.com/images/og-koshercheto.jpg' },
      { property: 'og:url', content: 'https://koshercheto.com/#sendMessage' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Частна занималня Кошерчето' },
    ]);
  }

  onSubmit() {
    if (this.form.valid) {
      const serviceID = 'service_6n9as0o';
      const templateID = 'template_zptobbp';
      const publicKey = 'rpdhUJXaMKBu9XlfG';

      emailjs.send(serviceID, templateID, this.form.value, publicKey)
      .then(() => {
        this.success = true;
        this.form.reset();
        setTimeout(() => this.success = false, 3000);
      })
      .catch((error) => {
        console.error('EmailJS грешка:', error);
        alert('Възникна проблем при изпращането.');
      });
    }
  }
}