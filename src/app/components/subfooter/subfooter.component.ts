import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-subfooter',
  templateUrl: './subfooter.component.html',
  styleUrls: ['./subfooter.component.scss']
})
export class SubfooterComponent implements OnInit {

  constructor(private dialogService: NbDialogService) {
  }
  ngOnInit(): void {
     
  }
  
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
  

  items: NbMenuItem[] = [
    // {
    //   title: 'Profile',
    //   icon: 'person-outline',
     
    // },
    {
      title: 'Event 1 ',

      children: [
        {
          title: 'Stall 1',
         
        },
        {
          title: 'Stall 2',   
        },
        {
          title: 'Stall 3',
        },
      ],
      
    },
    {
      title: 'Event 2',
    
      children: [
        {
          title: 'Stall 1', 
        
        },
      ],
    },
    {
      title: 'Event 3',
    
      children: [
        {
          title: 'Stall 1',
         
        },
        {
          title: 'Stall 2 ',   
        },
        {
          title: 'Stall 3',
        },
      ],
      
    },
  ];

}
