import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./feature/header/header";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Header],
	template: `
    <app-header />
    <main class="main">
      <router-outlet />
    </main>
  `,
	styles: `
    :host {
      display: block;
    }
    main {
        padding-bottom: 4rem;
        width: 100ch;
        margin: 0 auto;
    }
  `,
})
export class App {}
