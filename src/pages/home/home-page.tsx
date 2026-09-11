import { WindowBar } from "../../components/window/window-bar";
import { useState } from "react";

const HomePage = () => {
  const [word, setWord] = useState("direcao");
  const [correction, setCorrection] = useState("direção");

  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col">
      <WindowBar />
      <main className="flex-1 rounded-t-3xl bg-zinc-800 flex flex-col gap-4 justify-center items-center">
        <span
          className={`${word === "" ? "text-zinc-500" : "text-red-400 line-through"}`}
        >
          {word === "" ? "Selecione uma palavra" : word}
        </span>

        {word !== "" ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-zinc-500">
              Possivel correção:{" "}
              <span className="text-blue-400">{correction}</span>
            </span>

            <div className="bg-zinc-800 rounded-full px-4 py-1.5 flex items-center gap-1 text-xs text-zinc-100 w-fit mx-auto">
              <kbd className="font-mono bg-white/10 rounded px-1.5 py-0.5 text-[11px] text-zinc-100">
                Ctrl
              </kbd>
              <span className="text-zinc-500">+</span>
              <kbd className="font-mono bg-white/10 rounded px-1.5 py-0.5 text-[11px] text-zinc-100">
                '
              </kbd>
              <span className="ml-1 text-zinc-400">para aplicar correção</span>
            </div>
          </div>
        ) : (
          "Nenhuma correção encontrada"
        )}
      </main>
    </div>
  );
};

export default HomePage;
