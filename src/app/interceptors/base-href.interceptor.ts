import { APP_BASE_HREF } from "@angular/common";
import type { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";

export function baseHrefInterceptor(): HttpInterceptorFn {
	return (req, next) => {
		const baseHref = inject(APP_BASE_HREF);
		if (!req.url.startsWith("/")) {
			return next(req);
		}
		if (req.url.startsWith(baseHref)) {
			return next(req);
		}
		return next(req.clone({ url: `${baseHref}${req.url}`.replaceAll("//", "/") }));
	};
}
