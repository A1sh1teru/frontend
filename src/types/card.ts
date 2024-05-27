export type Card = {
    id: number,
    images: [
        string
    ],
    title: string,
    description: string,
    bedroom: number,
    bathroom: number,
    location: string,
    area: number,
    price: number,
    year: number,
    features: [
        string
    ],
    category: {
        id: number,
        propertyType: string,
        createdAt: string,
    }
}