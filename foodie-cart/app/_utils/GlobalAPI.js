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
            restaurants(where: {categories_some: {slug: "`+category+`"}}) {
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

export default { getCategory, getBusiness }

