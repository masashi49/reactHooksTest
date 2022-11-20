import { act, renderHook } from "@testing-library/react"
import { useCounterEx } from './useCounterEx';

describe( "Exのテスト", () => {
    test( "初期値は10である", () => {
        const { result } = renderHook( () => useCounterEx( 10 ) )
        expect( result.current.countEx ).toBe( 10 )
    } )
    test( "increment", () => {
        const { result } = renderHook( () => useCounterEx( 10 ) )
        act( () => {
            result.current.increment()
            result.current.increment()
        } )
        expect( result.current.countEx ).toBe( 12 )
    } )
    test( "countExは100であり、10ではない", () => {
        const { result } = renderHook( () => useCounterEx( 100 ) )
        expect( result.current.countEx ).toBe( 100 )
        expect( result.current.countEx ).not.toBe( 10 )
    } )
    test( 'test', async () => { // 非同期のテストはasync
        const { result } = renderHook( () => useCounterEx( 100 ) )
        await act( () => {
            result.current.onClickAsyncIncrement()
        } )
        expect( result.current.countEx ).toBe( 101 )
    } )
    test( 'reset', () => { // 非同期のテストはasync
        const { result } = renderHook( () => useCounterEx( 100 ) )
        act( () => {
            result.current.countReset()
        } )
        expect( result.current.countEx ).toBe( 0 )
    } )

} )
