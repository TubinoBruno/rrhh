// Angular
import { Injectable } from '@angular/core';
// RxJS
import { Subject } from 'rxjs';
import { MenuHorizontalService } from '..';

@Injectable()
export class MenuConfigService {
	// Public properties
	onConfigUpdated$: Subject<any>;
	// Private properties
	private menuConfig: any;
	/**
	 * Service Constructor
	 */
	constructor(	 ) {
		// register on config changed event and set default config
		this.onConfigUpdated$ = new Subject();
	}

	/**
	 * Returns the menuConfig
	 */
	getMenus() {
		return this.menuConfig;
	}
	setMenusTopBar(elem: any){
		this.menuConfig.header = elem;
		this.loadConfigs(this.menuConfig)
	}
	
	/**
	 * Load config
	 *
	 * @param config: any
	 */
	loadConfigs(config: any) {
		this.menuConfig = config;
		this.onConfigUpdated$.next(this.menuConfig);
	}
}
