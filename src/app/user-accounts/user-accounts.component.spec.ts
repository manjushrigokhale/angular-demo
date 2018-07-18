import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountsComponent } from './user-accounts.component';

xdescribe('UserAccountsComponent', () => {
  let component: UserAccountsComponent;
  let fixture: ComponentFixture<UserAccountsComponent>;
it(`should have as title 'Angular 5 App'`, async(() => {
   const fixture = TestBed.createComponent(UserAccountsComponent);
    const test1 = fixture.debugElement.componentInstance;
    expect(test1.title).toEqual('Angular');
 }));
 beforeEach(async(() => {
  TestBed.configureTestingModule({
      declarations: [ UserAccountsComponent ]
    })
    .compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountsComponent);
   component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
