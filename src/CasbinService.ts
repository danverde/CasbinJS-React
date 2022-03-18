import casbin, { Enforcer, MemoryAdapter, newModel } from 'casbin.js';

class CasbinService {

  casbinModel: casbin.Model = newModel(`
  [request_definition]
  r = sub, obj, act

  [policy_definition]
  p = sub, obj, act

  [role_definition]
  g = _, _, _

  [policy_effect]
  e = some(where (p.eft == allow))

  [matchers]
  m = r.sub == p.sub && keyMatch(r.obj, p.obj) && r.act == p.act
  `);

  enforcer: Enforcer = new Enforcer();

  setPolicies = (policies: string): void => {
    const adapter = new MemoryAdapter(policies);

    const enforcerPromise = casbin.newEnforcer(this.casbinModel, adapter);
    enforcerPromise.then((enforcer) => this.enforcer = enforcer);
  };

  enforce = (sub: string, obj: string, act: string): boolean => this.enforcer.enforceSync(sub, obj, act);

}

export default new CasbinService();
