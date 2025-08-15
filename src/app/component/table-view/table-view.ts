import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../service/data';

@Component({
  selector: 'app-table-view',
  standalone: false,
  templateUrl: './table-view.html',
  styleUrl: './table-view.scss'
})
export class TableView implements OnInit {
  data: any[] = [];
  headers: string[] = [];

  constructor(private dataService: Data, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.data = res;
      if (this.data.length > 0) {
        this.headers = Object.keys(this.data[0]);
      }
    });
  }

  goToDetails(id: string) {
    this.router.navigate(['/details', id]);
  }

  onRowClick(event: MouseEvent, id: string) {
    if ((event.target as HTMLElement).tagName.toLowerCase() !== 'input') {
      this.goToDetails(id);
    }
  }
}

