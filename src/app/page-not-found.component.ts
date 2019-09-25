import { Component } from '@angular/core';

@Component({
	selector: 'page-404',
	template: `
    <div class='center'>
      <img src="https://img-0.journaldunet.com/DiiKkfUVMXrtnhQR2IWEp8hXEpg=/1280x/smart/c64aaa86188643eba9ca6ac7e7f7c3ae/ccmcms-jdn/10984460.jpg"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/machine/list" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
