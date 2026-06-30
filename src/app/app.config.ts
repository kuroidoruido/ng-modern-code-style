import { type ApplicationConfig, EnvironmentProviders, provideAppInitializer, provideBrowserGlobalErrorListeners, Provider } from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";

import { routes } from "./app.routes";
import { APP_BASE_HREF } from "@angular/common";

export const appConfig: ApplicationConfig = {
	providers: [provideBrowserGlobalErrorListeners(), provideAppBaseHref(), provideRouter(routes, withHashLocation())],
};

function provideAppBaseHref(): Provider | EnvironmentProviders {
	if (location.pathname.length > 1) {
		return { provide: APP_BASE_HREF, useValue: location.pathname };
	} else {
		return { provide: APP_BASE_HREF, useValue: '/' };
	}
}