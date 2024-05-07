import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    color:string
}

export type ListItemProps = {
    children: ReactNode;
    isUnderlined: boolean;
}

export type ProductState = {
    id: number;
    attributes:ProductAttributes
}

export type ProductAttributes = {
        category: string;
        color: string[];
        company: string;
        createdAt: string;
        description: string;
        featured: boolean;
        image: string;
        price: string;
        publishedAt: string;
        shipping: boolean;
        title: string;
        updatedAt: string;
};