import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

@Component({
  selector: 'app-markdown-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './markdown-editor.html',
  styleUrls: ['./markdown-editor.css']
})
export class MarkdownEditorComponent {
  markdown = '';

  get renderedMarkdown() {
    return marked.parse(this.markdown || '');
  }
}
