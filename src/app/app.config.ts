import { APP_BASE_HREF } from "@angular/common";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {
	type ApplicationConfig,
	type EnvironmentProviders,
	type Provider,
	provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";
import { routes } from "./app.routes";
import { baseHrefInterceptor } from "./interceptors/base-href.interceptor";

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideAppBaseHref(),
		provideRouter(routes, withHashLocation()),
		provideHttpClient(withInterceptors([baseHrefInterceptor()])),
	],
};

function provideAppBaseHref(): Provider | EnvironmentProviders {
	if (location.pathname.length > 1) {
		return { provide: APP_BASE_HREF, useValue: location.pathname };
	} else {
		return { provide: APP_BASE_HREF, useValue: "/" };
	}
}
