import { useState, useEffect } from "react";
import apiClient from "../app-client";
import { type FetchResponse } from "@/models/fetch-types";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig): {data: T[], isLoading: boolean, error: string, count: number} {
   const queryKey: any[] = [endpoint]
   config && queryKey.push(config)
    const queryRes = useQuery<FetchResponse<T>, AxiosError>({
    queryKey,
    queryFn: () => apiClient.get<FetchResponse<T>>(endpoint, config).then(res => res.data),
    staleTime: 3600_000,
    gcTime: 1000_000
   })
   
    return {data:queryRes.data?.results || [], isLoading: queryRes.isLoading, error: queryRes.error?.message || "",
         count: queryRes.data?.count || 0};
}