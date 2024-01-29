import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}
  // kasi ngOnInit kalau mau pake DOM
  ngOnInit(): void {
    let toggleSidebar = document.querySelector('#toggleSidebar')
    let sidebar = document.querySelector('.sidebar')
    toggleSidebar?.addEventListener('click', () => {
        sidebar?.classList.toggle('active');
    })
    }

    goToDashboard () {
      this.router.navigate(['/dashboard/userlist'])
    }
  }
