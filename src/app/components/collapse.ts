import { Component, input, signal } from "@angular/core";

@Component({
	selector: "app-collapse",
	template: `
        <details (toggle)="isOpen.set($event.newState === 'open')">
            <summary>{{title()}}</summary>
            @if (isOpen()) {
                <ng-content />
            }
        </details>
    `,
	styles: `
    details {
        summary {
            cursor: pointer;
        }
        &[open] {
            padding: 0 1rem 2rem 0.5rem;
        
            summary {
                margin-left: -0.5rem;
                margin-right: -1rem;
            }
        }
    }
    `,
})
export class Collapse {
	public readonly title = input.required<string>();
	protected readonly isOpen = signal<boolean>(false);
}
