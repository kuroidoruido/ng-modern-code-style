import { httpResource } from "@angular/common/http";
import { Component, computed } from "@angular/core";

@Component({
	selector: "agents-md",
	template: `
    <h1>AGENTS.md</h1>
    <p i18n>This file is design to guide AI Agents but can be very usefull for human too as it give a concise and official coding guideline!</p>
    <p i18n>It's not a perfect guideline but it gives a simple direction.</p>
    @if (md.error()) {
        <pre>{{ errors() }}</pre>
    } @else {
        <pre>{{ md.value() }}</pre>
    }
    `,
	styles: `
    pre {
        white-space: pre-wrap;
        padding: 1em 1.5em;
        border: 1px solid lightgray;
    }
    `,
})
export default class AgentsMd {
	protected readonly md = httpResource.text(() => ({ url: "/assets/AGENTS.md", defaultValue: "loading..." }));
	protected readonly errors = computed(() => JSON.stringify(this.md.error(), undefined, 2));
}
