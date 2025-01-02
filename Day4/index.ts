// Problem: E-commerce Product Analysis

/*
You are working for an e-commerce platform and need to analyze product data.
You have an array of products with the following structure:

interface Product {
    id: number;
    name: string; 
    price: number;
    category: string;
    rating: number;
    stock: number;
}

Tasks:
1. Find all products that cost more than $50 and are in stock
2. Calculate the average rating of all products in the "Electronics" category
3. Get the names of the top 3 highest rated products
4. Find the total value of inventory (price * stock) for each category
5. Create a summary of products showing only id, name and price, sorted by price
*/

//Answer
export type Product = {
    id: number
    name: string
    price: number
    category: string
    rating: number
    stock: number
}

export const eComAnalysis = (products: Product[]) => {
    return {
        filterProducts: () => {
            return products.filter((val) => val.stock > 0 && val.price > 50)
        },
        getAvgRatings: () => {
            let overall = 0
            let dividedBy = 0

            products.map((val, i) => {
                if (val.category === 'Electronics') {
                    overall += val.rating
                    dividedBy += 1
                }
            })
            return (overall / dividedBy).toFixed(2)
        },
        getHighestRatings: () => {
            const sortedOnRatings = products.sort((a, b) => a.rating - b.rating)
            const highestRatingProduct = sortedOnRatings.slice(-3)
            return highestRatingProduct.map((val) => val.name)
        },
        getTotalValue: () => {
            const productPriceByCategory: { [category: string]: number } = {}
            products.map((val) => {
                if (!productPriceByCategory[val.category]) {
                    productPriceByCategory[val.category] = 0
                }
                productPriceByCategory[val.category] += val.price * val.stock
            })
            return productPriceByCategory
        },
        getSummary: () => {
            let productArray: { id: number; name: string; price: number }[] = []
            const sortedByPrice = products.sort((a, b) => a.price - b.price)

            sortedByPrice.map((val) => {
                productArray.push({
                    id: val.id,
                    name: val.name,
                    price: val.price
                })
            })
            return productArray
        }
    }
}

// getTotalValue: () => {
//   const productPriceByCategory: Record<string, number> = {};
//   products.forEach(product => {
//     if (!productPriceByCategory[product.category]) {
//       productPriceByCategory[product.category] = 0;
//     }
//     productPriceByCategory[product.category] += product.price * product.stock;
//   });
//   return productPriceByCategory;
// },
