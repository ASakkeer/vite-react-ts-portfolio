/**
 * Bridge so demos (and future modes) can trigger the same CursorFire burn pipeline.
 */

type ForceBurnHandler = (el: HTMLElement, onComplete: () => void) => void;

let handler: ForceBurnHandler | null = null;

type Queued = {
  el: HTMLElement;
  resolve: () => void;
};

const queue: Queued[] = [];

export function registerForceBurnHandler(fn: ForceBurnHandler) {
  handler = fn;
  while (queue.length > 0 && handler) {
    const item = queue.shift();
    if (!item) break;
    handler(item.el, item.resolve);
  }
  return () => {
    if (handler === fn) handler = null;
  };
}

/** Run the real fire burn → ash → restore cycle on an element. */
export function forceBurnElement(el: HTMLElement): Promise<void> {
  return new Promise((resolve) => {
    if (handler) {
      handler(el, resolve);
      return;
    }
    queue.push({ el, resolve });
  });
}
