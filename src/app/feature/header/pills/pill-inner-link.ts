import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Pill } from "./pill";

@Component({
	selector: "app-pill-inner-link",
	template: `
        <a app-pill [routerLink]="link()" rel="noopener">
            <span>{{ title() }}</span>
        </a>
    `,
	imports: [Pill, RouterLink],
})
export class PillInnerLink {
	public readonly title = input.required<string>();
	public readonly link = input.required<string>();
}
