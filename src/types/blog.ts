export type Blog = {
    createdAt: string
    body: string
    id: string
    publishedAt: string
    revisedAt: string
    title: string
    updatedAt: string
    category: {
        createdAt: string
        id: string
        name: string
        publishedAt: string
        revisedAt: string
        updatedAt:string
    }
    image: {
        height: number
        url: string
        width: number
    }
}

export type Category = {
    createdAt: string
    id: string
    name: string
    publishedAt: string
    revisedAt: string
    updatedAt:string
}

export type Params = {
    params: {
        id: string
    }
}

export type Image = {
    height: number
    url: string
    width: number
}