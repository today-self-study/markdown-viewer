import { AppComponent } from './app/app';
import { config } from './app/app.config.server';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';

export default renderApplication(
  () => bootstrapApplication(AppComponent, config),
  {
    document: '<!doctype html><html><head></head><body><app-root></app-root></body></html>'
  }
);
