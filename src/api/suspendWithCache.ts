export const promiseCache: any = {};
export const suspendWithCache = (asyncFn: () => Promise<any>, key: any) => {
  const id = JSON.stringify(key);
  if (!promiseCache[id]) {
    promiseCache[id] = {};
    promiseCache[id].promise = new Promise<void>(async (resolve) => {
      promiseCache[id].value = await asyncFn();
      promiseCache[id].done = true;
      resolve();
    });
  }

  if (!promiseCache[id].done) {
    throw promiseCache[id].promise;
  } else {
    return promiseCache[id].value;
  }
};
