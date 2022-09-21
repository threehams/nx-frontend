import { Button } from "@truecar/battery-pack";

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div>
      <h1>Welcome to HomePage!</h1>
      <Button variant="primary">Call to Action</Button>
    </div>
  );
}
