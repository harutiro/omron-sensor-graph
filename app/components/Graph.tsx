"use client"

import { Spinner } from "@chakra-ui/react"
import { useSensorGet } from "../hooks/sensor_api"

export function SensorGraph () {
    const { sensor, isLoading } = useSensorGet();
    if (isLoading) return <Spinner />
    return <h1>Welcome back, {sensor && sensor[0]?.temperature}</h1>
}