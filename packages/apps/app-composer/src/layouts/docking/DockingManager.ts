import { Action, IJsonModel, Model } from 'flexlayout-react';
import { DefaultLayout } from './helpers';

export class DockingManager {
  private _model?: Model;
  readonly onLayoutChanged: (model: Model, action: Action) => void =
    this._onLayoutChanged.bind(this);

  constructor() {}

  get model(): Model {
    if (!this._model) {
      const json = localStorage.getItem('dockingLayout');
      return Model.fromJson(json ? JSON.parse(json) : DefaultLayout);
    }
    return this._model;
  }

  private _onLayoutChanged(model: Model, action: Action): void {
    console.log('onLayoutChanged', model, action);
    const modelJson = model.toJson();
    localStorage.setItem('dockingLayout', JSON.stringify(modelJson));
    this._model = model;
  }
}
