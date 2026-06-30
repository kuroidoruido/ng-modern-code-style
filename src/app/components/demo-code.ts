import { APP_BASE_HREF, NgComponentOutlet } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, input, resource, ViewEncapsulation } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";
import { DomSanitizer, type SafeHtml } from "@angular/platform-browser";
import { transformerNotationHighlight, transformerNotationWordHighlight } from "@shikijs/transformers";
import { map, type Observable, switchMap } from "rxjs";
import { codeToHtml } from "shiki/bundle/web";

@Component({
	selector: "app-demo-code",
	template: `
        <div class="code" [innerHTML]="code.value()"></div>
        <div class="preview" [attr.data-preview-path]="path()">
            <p [id]="uuid"><span>Preview</span></p>
            <div class="preview-container" [aria-labelledby]="uuid"><ng-container *ngComponentOutlet="previewComponent.value()" /></div>
        </div>
    `,
	styles: `
        app-demo-code {
            --border-color: light-dark(lightgray, #555);
            --text-color: light-dark(black, white);
            & > div.code {
                border: 1px solid var(--border-color);
                & > pre {
                    background-color: black;
                    padding: 0.5em 1em;
                }
                
            }
            &> div.preview {
                & > p {
                    font-style: italic;
                    background-color: var(--border-color);
                    color: var(--text-color);
                    margin-bottom: 0;
                    padding: 0.25em 1em;
                    border-radius: 8px 8px 0 0;
                    width: min-content;
                }
                & > .preview-container {
                    border: 1px solid var(--border-color);
                    padding: 1em 2em;

                }
            }
        }
    `,
	imports: [NgComponentOutlet],
	encapsulation: ViewEncapsulation.None,
})
export class DemoCode {
	public readonly path = input.required<string>();
	public readonly component = input.required<string>();
	public readonly stepMark = input.required<string>();
	protected readonly uuid = crypto.randomUUID();
	private readonly http = inject(HttpClient);
	private readonly sanitizer = inject(DomSanitizer);
	private readonly baseHref = inject(APP_BASE_HREF);
	protected readonly code = rxResource({
		params: () => ({ path: this.path() }),
		stream: ({ params }) => this.loadCode(params.path),
	});
	protected readonly previewComponent = resource({
		params: () => ({ path: this.path(), component: this.component() }),
		loader: ({ params }) => import(`../../demo/${params.path}`).then((m) => m[params.component]),
	});

	private loadCode(path: string): Observable<SafeHtml> {
		return this.http.get(`${this.baseHref}assets/demo/${path}`, { responseType: "text" }).pipe(
			map((code) => code.replaceAll(this.stepMark(), "")),
			switchMap(hightlightCode),
			map((html) => this.sanitizer.bypassSecurityTrustHtml(html)),
		);
	}
}

function hightlightCode(code: string): Promise<string> {
	return codeToHtml(code, {
		lang: "typescript",
		themes: {
			light: "vitesse-light",
			dark: "vitesse-dark",
		},
		transformers: [transformerNotationHighlight(), transformerNotationWordHighlight()],
	});
}
