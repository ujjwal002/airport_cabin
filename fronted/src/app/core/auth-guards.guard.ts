import { CanActivateFn,Router } from '@angular/router';

import { Inject, inject } from '@angular/core';

export const authGuardsGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const token = localStorage.getItem("token");
  if(token===''|| token ===null){
    _router.navigate(['/login'])
  }
  return true;
};
