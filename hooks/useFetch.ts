import { useState, useEffect } from 'react'

export default function useFetch<TData>(
    getData: () => Promise<TData>,
    dependencies: any[] = [],
    initialValue?: TData
) {
    const [data, setData] = useState<TData | undefined>(initialValue)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        const doFetch = async () => {
            try {
                setIsLoading(true)
                const fetched = await getData()
                setData(fetched)
            } catch (err) {
                setError(err as Error)
            } finally {
                setIsLoading(false)
            }
        }

        doFetch()
    }, dependencies)

    return {
        data,
        isLoading,
        error,
        setData
    }
}