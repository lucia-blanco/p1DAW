import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  items: any[] = [];
  filteredItems: any[] = [];
  transcript: Observable<any>;
  expanded: number = null;
  currentFilter: string;
  filters = {};
  type: string;
  userStars: string;
  createdAt: number;

  constructor( public db: AngularFireDatabase) {
    db.list('/room-metadata', ref => ref.orderByChild('feedback').equalTo(true))
    .valueChanges()
    .subscribe(list => {
      this.items = list;
      this.applyFilters();
    });
  }

  numberToArray(n: number): Array<string> {
    const rtn = [];
    for (let i = 0; i < n; i++) {
      rtn.push('');
    }
    return rtn;
  }

  ngOnInit() {}

  getColor(type: string): string {
    switch (type) {
      case 'suggestion': {
        return 'md-chip-green';
      }
      case 'question': {
        return 'md-chip-blue';
      }
      case 'problem': {
        return 'md-chip-red';
      }
      default: {
        return '';
      }
    }
  }

  openChat(id, i) {
    if (this.expanded === i) {
      this.expanded = null;
    } else {
      this.expanded = i;
    }

    if (this.expanded != null) {
      this.transcript = this.db.list('/room-messages/' + id).valueChanges();
    }
  }

  private applyFilters() {
    this.filteredItems = _.filter(this.items, _.conforms(this.filters) );
  }

  // filter property by equality to rule (type and stars)
  filterType(property: string, rule: any) {
    this.filters[property] = val => val === rule;
    this.applyFilters();
  }

  filterStars(property: string, rule: any) {
    this.filters[property] = val => val === Number(rule);
    this.applyFilters();
  }

  // filter date
  filterDate(property: string, rule: number) {
    const dateLimit = new Date().getTime() - (rule * 24 * 60 * 60 * 1000);
    this.filters[property] = val => val > dateLimit;
    this.applyFilters();
  }

  // removes filter
  removeFilter(property: string) {
    delete this.filters[property];
    this[property] = null;
    this.applyFilters();
  }
}
