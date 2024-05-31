import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Server | Observable<Server> | Promise<Server> {
    return this.serversService.getServer(+route.params['id']);
  }
}

// interface Server {
//   id: number;
//   name: string;
//   status: string;
// }

// export const serverResolver: ResolveFn<Server> = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): Observable<Server> | Promise<Server> | Server => {
//   return inject(ServersService).getServer(+route.params['id']);
// };
