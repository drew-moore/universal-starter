import 'angular2-universal/polyfills';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'rxjs/Rx';

// angular
import {
  provide,
  enableProdMode,
  expressEngine,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';

//ngrx
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@ngrx/router';

//app

import { EpublicContainer, core_ui, CORE_PROVIDERS } from './app/core';



function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config: ExpressEngineConfig = {
    directives: [ EpublicContainer ],
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:3000'}),
      provide(BASE_URL, {useValue: baseUrl}),


    ],
    providers: [
      provide(REQUEST_URL, {useValue: url}),
      NODE_ROUTER_PROVIDERS,
      NODE_HTTP_PROVIDERS,

      ...CORE_PROVIDERS,

      provideStore( { core_ui } ),

    ],
    async: true,
    preboot: false // { appRoot: 'app' } // your top level app component selector
  };

  res.render('index', config);
}

function indexFile(req, res) {
  res.sendFile('/index.html', {root: __dirname});
}


const app    = express(),
      ROOT   = path.join( path.resolve( __dirname, '..' ) ),
      ASSETS = path.join( path.resolve( __dirname, '..', 'src', 'assets' ) );


// Express View
app.engine( '.html', expressEngine );
app.set( 'views', __dirname );
app.set( 'view engine', 'html' );

app.use( bodyParser.json() );


// Serve static files
app.use(express.static(ROOT, {index: false}));
app.use('/assets', express.static( ASSETS, { index: false } ) )

// Our API for demos only
app.get('/data.json', (req, res) => {
  res.json({
    data: 'This fake data came from the server.'
  });
});

// Routes with html5pushstate
app.use('/', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});
