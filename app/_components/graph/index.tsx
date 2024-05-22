"use client"

import React, { useEffect, useState } from "react"
import { Box, Spinner, Text } from "@chakra-ui/react"
import { useSensorGet } from "../../_hooks/sensor_api"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from './style.module.css';
import { SensorData } from "./types";

interface GraphProps {
    title: string;
    dataKey: keyof SensorData;
    domain: [number, number];
}

const Graph: React.FC<GraphProps> = ({ title, dataKey, domain }) => {
    const { sensor, isLoading } = useSensorGet();
    const [data, setData] = useState<{ date: Date; value: string }[]>([]);

    useEffect(() => {
        if (sensor) {
            let processedData = sensor.map((s) => {
                if (s.temperature === 0) return null;
                return {
                    date: s.time_measured,
                    value: String(s[dataKey]) // Convert value to a string
                }
            }).filter((d) => d !== null);

            // 逆順にする
            processedData.reverse();
            setData(processedData);
        }
    }, [sensor, dataKey]);

    if (isLoading) return <Spinner />

    return (
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>{title}</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1}>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date" />
                    <YAxis domain={domain} />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
}


export const TempGraph: React.FC = () => {
    return <Graph title="温度" dataKey="temperature" domain={[0, 50]} />;
}

export const SoundNoiseGraph: React.FC = () => {
    return <Graph title="音量" dataKey="sound_noise" domain={[0, 50]} />;
}

export const EC02Graph: React.FC = () => {
    return <Graph title="eCO2" dataKey="eCO2" domain={[0, 50]} />;
}

export const ETVOCGraph: React.FC = () => {
    return <Graph title="eTVOC" dataKey="eTVOC" domain={[0, 50]} />;
}

export const RelativeHumidityGraph: React.FC = () => {
    return <Graph title="相対湿度" dataKey="relative_humidity" domain={[0, 50]} />;
}

export const SeismicIntensityGraph: React.FC = () => {
    return <Graph title="地震強度" dataKey="seismic_intensity" domain={[0, 50]} />;
}

export const BarometricPressureGraph: React.FC = () => {
    return <Graph title="気圧" dataKey="barometric_pressure" domain={[0, 50]} />;
}

export const AmbientLightGraph: React.FC = () => {
    return <Graph title="光" dataKey="ambient_light" domain={[0, 50]} />;
}