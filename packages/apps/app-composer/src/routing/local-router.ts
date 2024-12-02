import { IRouteProvider, IWidgetRoute } from '@avam/core-types';

function getWidget(module: any, widget?: string) {
  return widget ? module[widget] : module.default;
}

export class LocalRouterProvider implements IRouteProvider {
  private _routesMap = new Map<string, IWidgetRoute>(this.buildRoutes());
  constructor() {
    this.buildRoutes();
  }
  getWidgetRoute(id: string): IWidgetRoute | undefined {
    return this._routesMap.get(id);
  }

  private buildRoutes(): [string, IWidgetRoute][] {
    return [
      [
        'AmpsView',
        {
          id: 'AmpsView',
          factory: (widget?: string) =>
            import('@avam/amps-console').then((module) =>
              this.getWidget(module, widget)
            ),
        },
      ],
      [
        'ClarityDash',
        {
          id: 'ClarityDash',
          factory: (widget?: string) =>
            import('@avam/clarity-dash').then((module) =>
              this.getWidget(module, widget)
            ),
        },
      ],
    ];
  }

  private getWidget(module: any, widget: string = 'default') {
    if (!module[widget]) throw new Error(`Widget ${widget} not found`);
    return { default: module[widget] };
  }
}
