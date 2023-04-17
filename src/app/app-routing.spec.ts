import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe("App Routing", () => {
    let router: Router;
    let fixture: ComponentFixture<AppComponent>;
    let location: Location;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                HeaderComponent
            ],
        }).compileComponents()
    });

    beforeEach(() => { 
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent);
    });

    it('should navigate to the default path', async () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(location.path()).toBe('/');
        });
    });
});
