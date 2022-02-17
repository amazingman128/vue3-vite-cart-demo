export interface IProduct {
    id: number,
    title: string,
    price: number
    inventory: number
}

const _products: IProduct[] = [
    {
        id: 1,
        title: 'IPhone13Pro',
        price: 5600,
        inventory: 1000
    }, {
        id: 2,
        title: 'BlackBerry',
        price: 7800,
        inventory: 500
    }, {
        id: 2,
        title: 'SonyEric',
        price: 7800,
        inventory: 500
    },
]

export const getProducts = async () => {
    await wait(1)
    return _products
}

export const buyProducts = async () => {
    await wait(1)
    return Math.random() > 0.5
}

async function wait(delay: number) {
    return new Promise((resolve => setTimeout(resolve, delay)))
}
