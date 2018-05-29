import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  avgStarsCode = `averageStars() {
    this.avgRating = 0;
    this.filteredItems.forEach(element => {
      this.avgRating = this.avgRating + element.userStars;
    });
    this.avgRating = this.avgRating / this.filteredItems.length;
  }`;

  avgStarsCode2 = `private applyFilters() {
    this.filteredItems = _.filter(this.items, _.conforms(this.filters));
    this.averageStars();
  }`;

  avgStarsCode3 = `filterType(property: string, rule: any) {
    this.filters[property] = val => val === rule;
    this.applyFilters();
  }
filterDate(property: string, rule: number) {
    const dateLimit = new Date().getTime() - (rule*24*60*60*1000);
    this.filters[property] = val => val > dateLimit;
    this.applyFilters();
  }`;

  avgStarsCode4 = `removeFilter(property: string) {
    delete this.filters[property];
    this[property] = null;
    this.applyFilters();
  }`;

  fqotc1 = `db.list('/room-metadata',
  ref => ref.orderByChild('closed').equalTo(false))
  .valueChanges()
  .subscribe(list => {
    this.items = list;
    this.items.forEach( room => {
      this.db.list('/room-messages/' + room.id, ref => ref.orderByChild('id'))
      .valueChanges()
      .subscribe(messages => {
        if (messages[messages.length - 1]['message'] !== '') {
          room.message = messages[messages.length - 1]['message'];
        } else {
          room.message = 'Image';
        }
      });
    });
  }, error => {if (this.debug) { console.log(error); }});`;

  fqotc2 = `<div id="message">
  <p style="margin-bottom: 0">{{ item.message }}</p>
  <i style="margin-bottom: 0" class="fa fa-image"
  *ngIf="item.message == 'Image'"></i>
</div>`;


  modal1 = `function myfunc(className) {
    var modal = document.getElementById('picModal');
    var img =  document.getElementById('imgs');
    var modalImg = document.getElementById("img01");
    var close = document.getElementById('close');
    if(className=="small-img") {
      modal.style.display = "block";
      modalImg.src = imgs.src;
    } else {
      div.className = "small-img";
      modal.style.display = "none";
    }
    close.onclick = function() {
      modal.style.display = "none";
    }
  }`;

  modal2 = `<div *ngIf="item.photoUrl">
  <img id="imgs" onclick="myfunc('small-img')"
  class="small-img" src="{{item.photoUrl}}">
</div>
<!-- Modal (large image) -->
<div id="picModal" class="modal">
  <span id="close">&times;</span>
  <img class="modal-content" id="img01">
</div>`;


  //  = ``;

}
