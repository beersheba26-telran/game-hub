import { useState, useEffect } from "react";
import apiClient from "../app-client";
import { type FetchResponse } from "@/models/fetch-types";
import { AxiosError, AxiosRequestConfig } from "axios";

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig, deps?: any[]): {data: T[], isLoading: boolean, error: string} {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    useEffect(() => {
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint,config).then(res => setData(res.data.results))
        .catch((e: AxiosError) => setError(`${e.message}`))
        .finally(() => setLoading(false));
    }, deps || [])
    return {data, isLoading, error};
}