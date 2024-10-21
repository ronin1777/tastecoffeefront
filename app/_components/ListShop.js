'use client'

import ShopItem from "@/app/_components/ShopItem";

import Grid from '@mui/material/Grid';




export default function ListShop({ products }) {
    return (
        <Grid container spacing={3} className="mt-10">
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={product.id}>
                    <ShopItem product={product} />
                </Grid>
            ))}
        </Grid>
    );
}