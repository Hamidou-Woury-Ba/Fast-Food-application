import { gql, request } from 'graphql-request'

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL

const getCategory = async () => {
    const query = gql`
        query Categories {
            categories(first: 50) {
                id
                name
                slug
                icon {
                    url
                }
            }
        }    
    `
    const result = await request(MASTER_URL, query)
    return result
}

const getBusiness = async (category) => {
    const query = gql`
        query Business {
            restaurants(where: {categories_some: {slug: "`+ category + `"}}) {
                aboutUs
                addresse
                banner {
                url
                }
                categories {
                name
                }
                id
                name
                restoType
                slug
                workingHours
            }
        }
    `
    const result = await request(MASTER_URL, query)
    return result
}

const getBusinnesDetail = async (businessSlug) => {
    const query = gql`
        query RestaurantDetail {
            restaurant(where: {slug: "`+ businessSlug + `"}) {
                aboutUs
                addresse
                banner {
                url
                }
                categories {
                name
                }
                id
                name
                restoType
                slug
                workingHours
                menu {
                ... on Menu {
                    id
                    category
                    menuItem {
                    ... on MenuItem {
                        id
                        name
                        description
                        price
                        productImage {
                        url
                        }
                    }
                    }
                }
                }
            }
        }     
    `
    const result = await request(MASTER_URL, query)
    return result
}

const addToCart = async (data) => {
    const query = gql`
        mutation AddToCart {
            createUserCart(
                data: {email: "`+ data?.email + `", productName: "` + data?.name + `", price: ` + data?.price + `, productImage: "` + data?.productImage + `", productDescription: "` + data?.description + `"}
            ) {
                id
            }
            publishManyUserCartsConnection(to: PUBLISHED) {
                aggregate {
                count
                }
            }
        }
    `
    const result = await request(MASTER_URL, query)
    return result
}

const getUserCart = async (userEmail) => {
    const query = gql`
        query GetUserCart {
            userCarts(where: {email: "`+ userEmail + `"}) {
                id
                price
                productDescription
                productImage
                productName
            }
        }
    `
    const result = await request(MASTER_URL, query)
    return result
}

export default { getCategory, getBusiness, getBusinnesDetail, addToCart, getUserCart }

