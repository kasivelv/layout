import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbActionsModule } from '@nebular/theme';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { UserData } from 'src/app/@core/data/users';
import { LayoutService } from 'src/app/@core/utils/layout.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService) {
}

  ngOnInit(): void {
  }



  items: NbMenuItem[] = [
    // {
    //   title: 'Profile',
    //   icon: 'person-outline',
     
    // },
    {
      title: 'Event 1',
    
      children: [
        {
          title: 'STALL 1',
         
        },
        {
          title: 'Stall 5 ',   
        },
        {
          title: 'Stall 7',
        },
      ],
      
    },
    {
      title: 'Event 8',
    
      children: [
        {
          title: 'Stall 2', 
        
        },
      ],
    },
    {
      title: 'Event 10',
    
      children: [
        {
          title: 'STALL 11',
         
        },
        {
          title: 'Stall 15 ',   
        },
        {
          title: 'Stall 17',
        },
      ],
      
    },
  ];
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
  
    return false;
  }
}
