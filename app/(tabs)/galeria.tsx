import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import ProductItem from "../../components/ProductItem";
import SearchBar from '../../components/SearchBar';
import type { Product } from "../../data/products";
import { PRODUCTS } from "../../data/products";

export default function Galeria() {
    const [search, setSearch]= useState('')

    const filteredProducts = PRODUCTS.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const renderItem = ({ item }: { item: Product }) => (
        <ProductItem
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          />
      )

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 8, backgroundColor: "#F9FAFB" }}> 
            <SearchBar value={search} onChangeText={setSearch} placeholder="Buscar producto..." />

            <FlatList
                data={filteredProducts}
                keyExtractor={(p) => p.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={{ textAlign: "center", marginTop: 24, color: "#6b7280" }}>
                      Sin resultados
                    </Text>
                }
            />

        </SafeAreaView>


    );
}


const styles = StyleSheet.create({
    list: { padding: 12 },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        gap: 6,
        overflow: "hidden",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#e5e7eb",
        marginBottom: 12,
    },
    img: { width: "100%", aspectRatio: 1, resizeMode: "cover", backgroundColor: "#f3f4f6" },
    title: { fontSize: 14, fontWeight: "600", color: "#111827" },
    price: { fontSize: 13, fontWeight: "700", color: "#065F46" },
    desc: { fontSize: 12, color: "#6b7280" },
    });

