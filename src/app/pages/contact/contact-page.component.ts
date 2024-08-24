import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact - Pokemon SSR');
    this.meta.updateTag({
      name: 'description',
      content: 'This is my contact Pokémon SSR',
    });
    this.meta.updateTag({
      name: 'og-title',
      content: 'Contact - Pokemon SSR',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'pokemon,contact, ssr, server-side rendering',
    });
  }
}
