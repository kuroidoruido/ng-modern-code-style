import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeService } from '../theme';
import { Header } from "./feature/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  host: {
    '[class]': 'classes()'
  },
  template: `
    <app-header />
    <main class="main">
      <router-outlet />
    </main>
  `,
  styles: `
    :host {
      display: block;
      &.theme-light {
        color: black;
        background-color: white;
      }
      &.theme-dark {
        color: white;
        background-color: black;
      }
    }
    main {
        padding-bottom: 4rem;
        width: 100ch;
        margin: 0 auto;   
    }
  `
})
export class App {
  protected readonly theme = toSignal(inject(ThemeService).getTheme());
  protected readonly classes = computed(() => ({ ['theme-'+(this.theme() ?? 'light')]: true }));
}
