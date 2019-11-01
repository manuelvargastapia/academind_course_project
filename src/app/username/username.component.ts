import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html"
})
export class UsernameComponent implements OnInit {
  username: string = "";

  constructor() {}

  ngOnInit() {}

  cleanInput(): void {
    this.username = "";
  }
}
