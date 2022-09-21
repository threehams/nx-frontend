import { Button } from "@truecar/battery-pack";

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-200">
      <div className="container py-4 mx-auto">
        <h1>Hello there, Welcome consumer!</h1>

        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
    </div>
  );
}
