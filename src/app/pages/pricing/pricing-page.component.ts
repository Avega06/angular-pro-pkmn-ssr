import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing Page';
    // }

    // console.log({ hola: 'mundo' });

    this.title.setTitle('Pricing - Pokemon SSR');
    this.meta.updateTag({
      name: 'description',
      content: 'This is my pricing Pokémon SSR',
    });
    this.meta.updateTag({
      name: 'og-title',
      content: 'Pricing - Pokemon SSR',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'pokemon,pricing, ssr, server-side rendering',
    });
  }
}
