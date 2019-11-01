import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  // selector: "[app-servers]",
  // selector: ".app-servers",
  /* template: `
    <app-server></app-server>
    <app-server></app-server>
  `, */
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer(): void {
    this.serverCreationStatus = "Server was created";
  }
}
