import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MarkdownEditorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
