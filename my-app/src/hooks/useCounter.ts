import { useCallback, useState } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(0)
    const [value ,setValue ] = useState(100)
    const increment = useCallback(() => setCount((n) => n + 1), [])

    return {
        count, increment, value, setValue
    }
}
