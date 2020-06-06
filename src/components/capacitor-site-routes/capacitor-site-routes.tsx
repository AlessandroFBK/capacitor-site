import { Component, Host, h } from '@stencil/core';

import { Route, match } from 'stencil-router-v2';

import { InternalRouterState } from 'stencil-router-v2/dist/types';

import state from '../../store';
import Router from '../../router';

@Component({
  tag: 'capacitor-site-routes',
  styleUrl: 'capacitor-site-routes.css',
})
export class CapacitorSiteRoutes {

  componentWillLoad() {
    Router.onChange('url', (newValue: InternalRouterState['url'], _oldValue: InternalRouterState['url']) => {
      (window as any).gtag('config', 'UA-44023830-42', { 'page_path': newValue.pathname + newValue.search });
      state.isLeftSidebarIn = false;
    });
  }

  render() {
    return (
      <Host>
        <Router.Switch>
          <Route path="/">
            <landing-page />
          </Route>

          <Route path={match('/blog', { exact: true })} render={() => {
            console.log('BLOG ROUTE MATCH');
            return <blog-page />
          }} />

          <Route path={match('/blog/:slug')} render={({ slug }) => {
            console.log('BLOG SLUG ROUTE MATCH', slug);
            return <blog-post slug={slug} />
          }} />


          <Route path="/enterprise">
            <capacitor-enterprise />
          </Route>

          <Route path="/docs">
            <document-component page="/docs/" />
          </Route>

          <Route path={match('/docs/:pageName*')} render={({ pageName }) => (
            <document-component page={`/docs/${pageName}`} />
          )} />
        </Router.Switch>
      </Host>
    );
  }

}