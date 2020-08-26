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

}
