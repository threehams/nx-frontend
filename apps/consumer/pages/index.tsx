import { Button } from "@truecar/battery-pack";

function Index() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="container mx-auto py-4">
        <h1>
          <span> Hello there, </span>
          Welcome consumer 👋
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </h1>
      </div>
    </div>
  );
}

export default Index;
