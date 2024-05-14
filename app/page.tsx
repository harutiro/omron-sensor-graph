import { AmbientLightGraph, BarometricPressureGraph, EC02Graph, ETVOCGraph, RelativeHumidityGraph, SeismicIntensityGraph, SoundNoiseGraph, TempGraph } from "@/app/components/Graph";
import { Button, Grid } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <TempGraph />
        <SoundNoiseGraph />
        <EC02Graph />
        <ETVOCGraph />
        <RelativeHumidityGraph />
        <SeismicIntensityGraph />
        <BarometricPressureGraph />
        <AmbientLightGraph />
      </Grid>
    </main>
  );
}
