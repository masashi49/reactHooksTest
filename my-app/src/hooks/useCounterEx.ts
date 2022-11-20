import { useState, useCallback } from "react"

export const useCounterEx = (initCount = 0) => {
    const [countEx, setCountEx] = useState(initCount)

    const increment = useCallback(() => {
        setCountEx((c) => ++c)
    }, [])

    const onClickAsyncIncrement = useCallback(() => {
        setTimeout(increment, 1000) // 1秒後に返す
        increment() // 1増やす
    }, [increment])

    const countReset = useCallback(
        () => {
            setCountEx(initCount)
        }, [initCount])

    return { countEx, increment, setCountEx, onClickAsyncIncrement, countReset } // オブジェクトで返す

}
