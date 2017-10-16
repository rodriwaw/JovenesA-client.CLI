import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,
      Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './app_shared/services/auth.service';
import { SessionService } from './app_shared/services/session.service';
import { MonthlyReportsAddComponent } from './+mentors/monthly-reports-add/monthly-reports-add.component';

@Injectable()
export class CanActivateViaAdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private session: SessionService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.auth.isAuthenticated()) {
      console.log('Can Activate Admin 1');
      if (this.session.isAdmin()) {
        console.log('Authenticated and Can Activate Admin');
        return true;
      } else {
        console.log('Authenticated but unauthorized for Admin');
        this.router.navigate(['unauthorized']);
        return false;
      }
    } else {
      console.log('Not authenticated -- Can\'t Activate Admin');
      //localStorage.setItem('redirect_url', state.url);
      this.auth.login();
      //this.router.navigate(['']);
      return false;
    }
  }
}
@Injectable()
export class CanActivateViaMentorAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private session: SessionService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.auth.isAuthenticated()) {
      if (this.session.isMentor()) {
        console.log('Authenticated and Can Activate Mentor');
        return true;
      } else {
        console.log('Authenticated but unauthorized for Mentor');
        // if this is on startup, will need to try navigate again after profile is loaded
        this.session.setFailedRoute('mentors');
        return false;
      }
    } else {
      console.log('link to Mentor but not authenticated -- need login');
      //localStorage.setItem('redirect_url', state.url);
      this.auth.login();
      return false;
    }
  }
}

@Injectable()
export class CanActivateViaStudentAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private session: SessionService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.auth.isAuthenticated()) {
      if (this.session.isStudent()) {
        console.log('Authenticated and Can Activate Student');
        return true;
      } else {
        console.log('Authenticated but unauthorized for Student');
        // if this is on startup, will need to try navigate again after profile is loaded
        this.session.setFailedRoute('students');
        return false;
      }
    } else {
      console.log('link to Student but not authenticated -- need login');
      this.auth.login();
      return false;
    }
  }
}

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<MonthlyReportsAddComponent> {

  canDeactivate(target: MonthlyReportsAddComponent) {
    if (target.hasChanges()) {
        return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
}
