# Micro frontends POC

To run:

1. Go to app-a folder.
2. Run `npm run build`.
3. Go to app-c folder.
4. Run `npm run build`.
5. Go to app-host
6. Run `npm start` and navigate to `http://localhost:9000`


## Setting up a webcomponent project

1. Add packages
    
         ng add @angular/elements
         ng add ngx-build-plus
         npm i -s document-register-element
         npm i -g http-server

2. Update the build script to: 
   
         ng build --prod --output-hashing none --single-bundle true && http-server .\\dist\\<appName> -p <portNumber>
         // Replace appName and portNumber as you need.

3. Modify angular.json
   
         Update section:
              ...
                      "architect": {
                        "build": {
                            "builder": "ngx-build-plus:build",
              ...
              // Usually this is set to ngx-build-plus:browser by default

4. In AppModule, setup your custom component in the entryComponents array:

         entryComponents: [ExternalDashboardTileComponent],

5. Update the class as follows:

         export class AppModule {
                constructor(private injector: Injector) {
                }

                ngDoBootstrap() {
                    const externalTileCE = createCustomElement(ExternalDashboardTileComponent, { injector: this.injector });
                    customElements.define('external-dashboard-tile-a', externalTileCE);
                }
            }
        Take note of the tag that you provide in the customElements.define(..., Component). This is the tag that should be used in the host application.

## Setup needed in the hosting application:
1. Add packages
    
         ng add @webcomponents/custom-elements
         ng add @webcomponents/webcomponentsjs
         npm i -s document-register-element

2. Edit `src\polyfils.ts` to add the following:
         
         import '@webcomponents/custom-elements/custom-elements.min';
         import 'core-js/es6/symbol';
         import 'core-js/es6/object';
         import 'core-js/es6/function';
         import 'core-js/es6/parse-int';
         import 'core-js/es6/parse-float';
         import 'core-js/es6/number';
         import 'core-js/es6/math';
         import 'core-js/es6/string';
         import 'core-js/es6/date';
         import 'core-js/es6/array';
         import 'core-js/es6/regexp';
         import 'core-js/es6/map';
         import 'core-js/es6/weak-map';
         import 'core-js/es6/set';

        // If you're missing the core-js package. Add it using npm i -s core-js. The newer ones don't come with es6 polyfills. So, I'm using 2.5.4.

3. Add the following to the root index.html

         <script src="webcomponents/webcomponents-loader.js"></script>
         <script>
             if (!window.customElements) {
                 document.write('<!--');
             }
         </script>
         <script src="webcomponents/custom-elements-es5-adapter.js"></script>
         <!-- Do not remove this. THe closing marker from this comment is neede for line 17 starting marker.-->