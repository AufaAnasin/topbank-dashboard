import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor() {}
  // kasi ngOnInit kalau mau pake DOM
  ngOnInit(): void {
    let toggleSidebar = document.querySelector('#toggleSidebar')
    let sidebar = document.querySelector('.sidebar')
    toggleSidebar?.addEventListener('click', () => {
        sidebar?.classList.toggle('active');
    })
    }
  }
