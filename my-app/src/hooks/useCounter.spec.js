import { act, renderHook } from "@testing-library/react"
import { useCounter } from './useCounter';

describe( "カウンターのテスト", () => {
    it( "初期値は0である", () => {
        const { result } = renderHook( () => useCounter() )
        expect( result.current.count ).toBe( 0 )
    } )
    it( "increment", () => {
        const { result } = renderHook( () => useCounter() )
        act( () => {
            result.current.increment()
            result.current.increment()
        } )
        expect( result.current.count ).toBe( 2 )
    } )
} )
