import { Button } from "@/components/ui/button";
import CategoryList from './_components/CategoryList'
import BusinessList from './_components/BusinessList'

export default function Home() {

  return (
    <div>
      <CategoryList />

      <BusinessList />
    </div>
  );
}
