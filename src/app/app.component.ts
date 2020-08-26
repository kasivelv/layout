
import { Component, OnInit, OnDestroy, NgModule} from '@angular/core';
// import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbActionsModule } from '@nebular/theme';
// import { map, takeUntil } from 'rxjs/operators';
// import { Subject } from 'rxjs';

// import { UserData } from 'src/app/@core/data/users';
// import { LayoutService } from 'src/app/@core/utils/layout.service';

import {  TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout';

//   constructor(private sidebarService: NbSidebarService,
//     private menuService: NbMenuService,
//     private themeService: NbThemeService,
//     private userService: UserData,
//     private layoutService: LayoutService,
//     private breakpointService: NbMediaBreakpointsService) {
// }


//   toggleSidebar(): boolean {
//     this.sidebarService.toggle(true, 'menu-sidebar');
//     this.layoutService.changeLayoutSize();

//     return false;
//   }

// constructor(private dialogService: NbDialogService) {
// }

// open(dialog: TemplateRef<any>) {
//   this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
// }

// users: { name: string, title: string }[] = [
//   { name: 'Carla Espinosa', title: 'Nurse' },
//   { name: 'Bob Kelso', title: 'Doctor of Medicine' },
//   { name: 'Janitor', title: 'Janitor' },
//   { name: 'Perry Cox', title: 'Doctor of Medicine' },
//   { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
//   { name: 'Carla Espinosa', title: 'Nurse' },
//   { name: 'Bob Kelso', title: 'Doctor of Medicine' },
//   { name: 'Janitor', title: 'Janitor' },

// ];
}
