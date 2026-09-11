export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-950 text-white">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-amber-500">Super Champions</h1>
        <p className="text-zinc-400">Plataforma de Gestão Esportiva — Capoeira</p>
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-xs text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Frontend pronto &bull; API na porta 7182
        </div>
      </div>
    </main>
  );
}
