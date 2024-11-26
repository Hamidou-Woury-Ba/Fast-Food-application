import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Subscribe to tubeguruji</h2>
      <Button>Subscribe</Button>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}
