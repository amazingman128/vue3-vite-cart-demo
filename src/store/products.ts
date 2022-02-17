import {defineStore} from "pinia";
import {getProducts, IProduct} from "../api/shop";

export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            all: []
        }
    },
    actions: {
        async loadAllProducts() {
            const result = await getProducts()
            this.all = result
            console.log(this.all)
        },
        decrementProduct(product: IProduct) {
            const findItem = this.all.find((item) => {
                return item.id === product.id
            })
            if (findItem) {
                findItem.inventory--
            }
        }
    }

})
