import { useState } from "react"

export const useFetching = (callback: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetching: any = async (props?: any) => {
        try {
            setIsLoading(true)
            await callback(props)
        } catch (e: any) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }
    
    return [fetching, isLoading, error]
}