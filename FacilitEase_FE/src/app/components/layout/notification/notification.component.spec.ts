import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { NotificationService } from '@app/features/service/httpService/NotificationService/notification.service';
import { of } from 'rxjs';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let mockAzureService: any;
  let mockNotificationService: any;

  beforeEach(async () => {
    mockAzureService = jasmine.createSpyObj(['userId']);
    mockNotificationService = jasmine.createSpyObj(['getNotifications']);

    await TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      providers: [
        { provide: AzureService, useValue: mockAzureService },
        { provide: NotificationService, useValue: mockNotificationService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch notifications on init', () => {
    mockNotificationService.getNotifications.and.returnValue(of([]));
    component.ngOnInit();
    expect(mockNotificationService.getNotifications).toHaveBeenCalled();
  });

  // Add more tests as needed...
});
