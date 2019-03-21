import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@nxi/ui';
import { HomeComponent } from './home.component';
import { CoreModule } from '@nxi/core';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<{ total: boolean }>;
  const initialState = { total: 0 };
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [ HomeComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spy = spyOn(store, 'dispatch');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'web'`, () => {
    const _component = fixture.debugElement.componentInstance;
    expect(_component.title).toEqual('web');
  });
  it(`should call increment`, () => {
    component.increment();
    expect(spy).toHaveBeenCalled();
  });
});
