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

  htmlCode = `
  <h1>Hello</h1>
  <p>fistrum pecador</p>
  `;

  highlight1 = `
  <slide>
    <source-code [code]="javaCode" [language]="'java'">
    </source-code>
  </slide>
  `;


  highlight2 = `
export class AppComponent {
  javaCode = \`
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello world!");
    }
  }\`;
}`;

  javaCode = `
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello world!");
    }
  }
  `;

  usdEurConverter = `
  <slide>
    <h1>USD - EUR Converter</h1>
    <usd-eur-converter></usd-eur-converter>
  </slide>
  `;

}
