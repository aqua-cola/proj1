import { useMemo } from "react"

export const usePaggination = (totalPages: number) => {

    return useMemo(() => {
        let result: number[] = []
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
        return result
    }, [totalPages])
      
}