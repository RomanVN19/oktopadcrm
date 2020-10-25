import { makeEntitiesFromStructures, use } from 'katejs';
import { packageName, structures } from './structure';

import TriggerMixin from './entities/Trigger';
import TriggerEntityMixin from './entities/TriggerMixin';

const AppServer = parent => class Server extends use(parent) {
  constructor(params) {
    super(params);

    makeEntitiesFromStructures(this.entities, structures);

    this.entities = {
      ...this.entities,
      Trigger: TriggerMixin(this.entities.Trigger),
    }
  }
  afterInit() {
    if (super.afterInit) {
      super.afterInit();
    }
    this.Trigger.updateTriggers();
  }
  beforeInit() {
    if (super.beforeInit) super.beforeInit();
    // add fields to docs
    Object.keys(this.entities).forEach((name) => {
      this.entities[name] = TriggerEntityMixin(this.entities[name]);
      this.entities[name].entity = name;
    });
  }
};
AppServer.package = packageName;
export default AppServer;
