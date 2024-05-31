import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanDeactivate,
  CanDeactivateFn,
  Params,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent
  implements OnInit, CanDeactivate<CanComponentDeactivate>
{
  server: { id: number; name: string; status: string };
  id = '';
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.id = params.id;
    // });
    // console.log(this.id);
    const id = this.route.snapshot.params.id;
    this.server = this.serversService.getServer(+id);
    // console.log(this.server);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] == '1' ? true : false;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    // this.router.navigate(['/servers']);
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?'); // returns a boolean
    } else {
      return true;
    }
  }
}
