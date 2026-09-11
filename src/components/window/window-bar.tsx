import { WindowControl } from "./window-control";

export const WindowBar = () => {
  return (
    <div
      data-tauri-drag-region
      className="w-full h-10 flex flex-row justify-between items-center bg-zinc-900"
    >
      <section className="pl-4 pointer-events-none flex flex-row gap-3 items-center">
        <span className="text-blue-500 text-[6px]">⬤</span>
        <h1 className="text-zinc-500 text-xs">Corretor</h1>
      </section>

      <section className="pointer-events-none flex flex-row gap-3 items-center pr-6">
        <WindowControl type="minimize" />
        <WindowControl type="close" />
      </section>
    </div>
  );
};
