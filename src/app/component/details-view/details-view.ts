import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../../service/data';


@Component({
  selector: 'app-details-view',
  standalone: false,
  templateUrl: './details-view.html',
  styleUrl: './details-view.scss'
})
export class DetailsView implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private dataService: Data, private router: Router) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.dataService.getItemById(id).subscribe(res => {
      this.item = res;
    });
  }

  goBack() {
    this.router.navigate(['/table-view']);
  }
}

