import { httpResource } from "@angular/common/http";
import { Component, computed } from "@angular/core";

@Component({
    selector: 'agents-md',
    template: `
    <h1>AGENTS.md</h1>
    @if (md.error()) {
        <pre>{{ errors() }}</pre>
    } @else {
        <pre>{{ md.value() }}</pre>
    }
    `,
    styles: `
    pre {
        white-space: pre-wrap;
    }
    `
})
export default class AgentsMd {
    protected readonly md = httpResource.text(() => ({ url: "/assets/AGENTS.md", defaultValue: 'loading...' }));
    protected readonly errors = computed(() => JSON.stringify(this.md.error(), undefined, 2));
}