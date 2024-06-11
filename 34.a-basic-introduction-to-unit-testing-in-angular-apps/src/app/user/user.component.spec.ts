import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [UserService, DataService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    const userService = TestBed.inject(UserService);

    // let fixture = TestBed.createComponent(UserComponent);
    // let app = fixture.debugElement.componentInstance;
    // let userService = fixture.debugElement.injector.get(UserService);

    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });

  it("shouldn't fetch data successfully if not called asynchronously", () => {
    const userService = TestBed.inject(UserService);
    const dataService = TestBed.inject(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    // let fixture = TestBed.createComponent(UserComponent);
    // let app = fixture.debugElement.componentInstance;
    // let userService = fixture.debugElement.injector.get(UserService);

    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', waitForAsync(() => {
    const userService = TestBed.inject(UserService);
    const dataService = TestBed.inject(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously fakeAsync', fakeAsync(() => {
    const dataService = TestBed.inject(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    tick();
    // console.log(component.data);
    expect(component.data).toBe('Data');
  }));
});
