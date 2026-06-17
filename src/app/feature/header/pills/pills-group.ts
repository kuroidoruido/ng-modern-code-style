import { Component, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "app-pills-group",
	template: `
        <div class="pill-group">
            <ng-content />
        </div>
        `,
	styles: `
        .pill-group {
            display: flex;
            flex-direction: column;
            align-items: start;
            flex-wrap: wrap;
            gap: 1.25rem;

            app-pill-link, app-pill-inner-link {
                &:nth-child(6n + 1) .pill {
                    --pill-accent: var(--bright-blue);
                }
                &:nth-child(6n + 2) .pill {
                    --pill-accent: var(--electric-violet);
                }
                &:nth-child(6n + 3) .pill {
                    --pill-accent: var(--french-violet);
                }
                
                &:nth-child(6n + 4) .pill {
                    --pill-accent: var(--vivid-pink);
                }
                &:nth-child(6n + 5) .pill {
                    --pill-accent: var(--hot-red);
                }
                &:nth-child(6n + 6) .pill {
                    --pill-accent: var(--orange-red);
                }
            }
        }
    `,
	encapsulation: ViewEncapsulation.None,
})
export class PillsGroup {}
