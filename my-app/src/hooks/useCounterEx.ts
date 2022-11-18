import { useState, useCallback } from "react"

export const useCounterEx = () => {
    const [countEx, setCountEx] = useState(9)

    const increment = useCallback(() => {
        setCountEx((c) => ++c)
    }, [])

    const onClickAsyncIncrement = useCallback(() => {
        setTimeout(increment, 1000) // 1秒後に返す
    }, [increment])

    return { countEx, setCountEx, onClickAsyncIncrement } // オブジェクトで返す

}
