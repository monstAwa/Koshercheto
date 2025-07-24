import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title, Meta } from "@angular/platform-browser";
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

  constructor(private fb: FormBuilder, private title: Title, private meta: Meta) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    this.meta.addTags([
      {
        name: 'description',
        content: 'Свържете се с нас чрез формата за съобщения. Пишете ни директно от сайта на частна занималня „Кошерчето“ – отговаряме с грижа и внимание.'
      },
      {
        name: 'keywords',
        content: 'контакт, съобщение, форма за контакт, изпрати съобщение, връзка с нас, Кошерчето, детска занималня, частна занималня'
      }
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
