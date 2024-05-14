import { SensorGraph } from "@/app/components/Graph";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Button colorScheme='blue'>Button</Button>
      <SensorGraph />
    </main>
  );
}
