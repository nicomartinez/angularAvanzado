import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GitCodeSearch } from "../git-code-search";

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css']
})
export class CodeDisplayComponent implements OnInit {

  @Input() searchResults: GitCodeSearch;
  @Input() favorites: Array<number>;
  @Output() updateFavorites = new EventEmitter<any[]>();
  constructor() { }

  ngOnInit() {
  }

  addFavorite: Function = (item) => {
    this.updateFavorites.emit([item.repository.id, true]);
  }

  removeFavorite: Function = (item) => {
    this.updateFavorites.emit([item.repository.id, false]);
  }

  checkFavorite: Function = (item) => {
    return this.favorites.indexOf(item.repository.id) > -1;
  }
}
