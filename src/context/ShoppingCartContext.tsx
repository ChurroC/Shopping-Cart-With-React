import { createContext, ReactNode, useContext, useState } from 'react'

type ShoppingCartProviderType = {
    children: ReactNode
}

type cartItemType = {
    id: number
    quantity: number
}

type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
    const [cartItems, setcartItems] = useState<cartItemType[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setcartItems(currItems => {
            if (currItems.find(item => item.id === id)) {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            } else {
                return [...currItems, { id, quantity: 1 }]
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setcartItems(currItems => {
            if (currItems.find(item => item.id === id)) {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            } else {
                return [...currItems, { id, quantity: 1 }]
            }
        })
    }
    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity: increaseCartQuantity,
                removeFromCart: increaseCartQuantity,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
