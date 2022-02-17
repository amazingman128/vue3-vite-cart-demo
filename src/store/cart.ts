import {defineStore} from "pinia";
import {IProduct} from "../api/shop";
import {Notify} from "quasar";
import {useProductStore} from '../store/products'


type CartProduct = {
    quantity: number
} & Omit<IProduct, 'inventory'>


export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            cartProducts: [] as CartProduct[]
        }
    },
    actions: {
        addProductToCart(product: IProduct) {
            if (product.inventory < 1) {
                Notify.create(product.title + '库存不足，无法添加到无购物')
                return false;
            }
            const cartItem = this.cartProducts.find((item) => {
                return item.id === product.id
            })
            if (cartItem) {
                cartItem.quantity++
            } else {
                this.cartProducts.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1
                })
                const productStore = useProductStore()
                productStore.decrementProduct(product)
            }
            console.log(this.cartProducts)
            Notify.create({
                icon:"",
                color:'green',
                message: product.title + '已添加到购物车',
                position: "top-right"
            })
        }
    }
})
