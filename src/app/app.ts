import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NgLogo } from "./ng-logo";
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeService } from '../theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgLogo, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '[class]': 'classes()'
  },
  styles: `
  :host {
    &.theme-light {
      color: black;
      background-color: white;
    }
    &.theme-dark {
      color: white;
      background-color: black;
    }
  }
  `
})
export class App {
  protected readonly theme = toSignal(inject(ThemeService).getTheme());
  protected readonly classes = computed(() => ({ ['theme-'+(this.theme() ?? 'light')]: true }));
}
