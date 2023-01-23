import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class ionicRouteReuseStrategy implements RouteReuseStrategy {
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
      throw new Error('Method not implemented.');
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
      throw new Error('Method not implemented.');
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
      throw new Error('Method not implemented.');
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false;
  }
}
