import { lazy } from "react";

/* path relative with file in components/utils/lazyload instead of path inside components */
// path like ../../components/component_name OR ../component_name

export function lazyload(path: string, namedExport?: string) {
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}
