import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Server name is: ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    console.log(event.target);
    this.serverName = (<HTMLInputElement>event.target).value; //event.target return the input element that holds the value we need to explicitly type it
    console.log(this.serverName);
  }
}
