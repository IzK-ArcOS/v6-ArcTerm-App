import type { App, AppMutator } from "$types/app";
import { AppRuntime } from "$ts/apps";

export class Runtime extends AppRuntime {
  constructor(app: App, mutator: AppMutator) {
    super(app, mutator);

    mutator.update((m) => {
      m.size.w = 0;
      m.size.h = 0;
      m.minSize.w = 0;
      m.minSize.h = 0;
      m.maxSize.w = 0;
      m.maxSize.h = 0;

      return m;
    })
  }
}