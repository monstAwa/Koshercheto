import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  constructor(private http: HttpClient) {}

  private generateUniqueId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  trackPageView(email?: string) {
    const eventId = this.generateUniqueId();

    return this.http.post('/api/fb-track', {
      event_name: 'ServerPageView',
      event_id: eventId,
      email,
      url: window.location.href,
    }).subscribe({
      next: (res) => console.log('FB track response:', res),
      error: (err) => console.error('FB track error:', err),
    });
  }
}