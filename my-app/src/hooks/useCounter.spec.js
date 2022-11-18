import { act, renderHook } from "@testing-library/react"
import { useCounter } from './useCounter';

describe( "カウンターのテスト", () => {
    test( "初期値は0である", () => {
        const { result } = renderHook( () => useCounter() )
        expect( result.current.count ).toBe( 0 )
    } )
    test( "increment", () => {
        const { result } = renderHook( () => useCounter() )
        act( () => {
            result.current.increment()
            result.current.increment()
        } )
        expect( result.current.count ).toBe( 2 )
    } )
    test( "valueは100であり、10ではない", () => {
        const { result } = renderHook( () => useCounter() )
        expect( result.current.value ).toBe( 100 )
        expect( result.current.value ).not.toBe( 10 )
    } )
} )
