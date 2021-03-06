// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  apiUrl: 'https://localhost:5001/api/',
  loginUrl: 'https://localhost:5001/api/account/login',         
  registerUrl: 'https://localhost:5001/api/account/register',        
  usersUrl: 'https://localhost:5001/api/users',        
  userUrl: 'https://localhost:5001/api/users/',        
  photoUrl: 'https://localhost:5001/api/users/add-photo',
  photoSetMain: 'https://localhost:5001/api/users/set-main-photo/',  
  photoDelete: 'https://localhost:5001/api/users/delete-photo/'      
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
