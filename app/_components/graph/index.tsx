"use client"

import { Box, Spinner } from "@chakra-ui/react"
import { useSensorGet } from "../../_hooks/sensor_api"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Text } from '@chakra-ui/react'
import styles from './style.module.css';

export function TempGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            温度: s.temperature
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>温度</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="温度" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="温度" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>   
}

export function SoundNoiseGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            音量: s.sound_noise
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>音量</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="音量" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="音量" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>
        
}


export function EC02Graph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            eCO2: s.eCO2
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>eCO2</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="eCO2" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="eCO2" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>
}

export function ETVOCGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            eTVOC: s.eTVOC
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>eTVOC</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="eTVOC" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="eTVOC" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>
}

export function RelativeHumidityGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            relative_humidity: s.relative_humidity
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>相対湿度</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="relative_humidity" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="relative_humidity" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>
}

export function SeismicIntensityGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            seismic_intensity: s.seismic_intensity
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>地震強度</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="seismic_intensity" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="seismic_intensity" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>
}

export function BarometricPressureGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            barometric_pressure: s.barometric_pressure
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>気圧</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="barometric_pressure" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="barometric_pressure" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>
}


export function AmbientLightGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />

    // sensorの中からtmpだけを取り出す
    let data = sensor?.map((s) => {
        if(s.temperature == 0) return null;
        return {
            date: s.time_measured,
            ambient_light: s.ambient_light
        }
    }) ?? []

    // 逆順にする
    data.reverse()
    data = data.filter((d) => d !== null);

    return <>
        <Box w='100%'>
            <Text fontSize='xl' textAlign='center'>光</Text>
            <ResponsiveContainer width={"100%"} aspect={2} className={styles.Line1} >
                <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis dataKey="date"  />
                    <YAxis dataKey="ambient_light" domain={[0, 50]}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="ambient_light" stroke="#ff7300" yAxisId={0} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    </>
}



