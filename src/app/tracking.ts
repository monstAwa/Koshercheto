import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  constructor(private http: HttpClient) {}

  trackPageView(email?: string) {
    return this.http.post('/api/fb-track', {
      event_name: 'PageView',
      email,
      url: window.location.href,
    }).subscribe({
      next: (res) => console.log('FB track response:', res),
      error: (err) => console.error('FB track error:', err),
    });
  }
}