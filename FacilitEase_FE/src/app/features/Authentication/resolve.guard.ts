import { inject } from '@angular/core';
import { AzureService } from './azureService/azure.service';

export const LoginEnter = () => {
  const azureService = inject(AzureService);
  return azureService.userValid;
};
export const IsL1Admin = () => {
  const azureService = inject(AzureService);
  return azureService.isL1Admin;
};
export const IsL2Admin = () => {
  const azureService = inject(AzureService);
  return azureService.isL2Admin;
};
export const IsL3Admin = () => {
  const azureService = inject(AzureService);
  return azureService.isL3Admin;
};
export const IsManager = () => {
  const azureService = inject(AzureService);
  return azureService.isManager;
};
export const IsDepartmentHead = () => {
  const azureService = inject(AzureService);
  return azureService.isDepartmentHead;
};
export const IsEmployee = () => {
  const azureService = inject(AzureService);
  return azureService.isEmployee;
};
