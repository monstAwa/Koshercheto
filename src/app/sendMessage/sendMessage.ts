import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';


@Component({
  standalone: true, 
  selector: 'app-sendMessage',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sendMessage.html',
  styleUrl: './sendMessage.scss'
})

export class sendMessage {
form: FormGroup;
success = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
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