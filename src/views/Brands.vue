<template>
    <v-container>
        <v-row justify="space-around">
            <v-col>
                <v-chip-group>
                    <v-chip
                        v-for="brand in dummy"
                        :key="brand.id"
                        @click="selectedBrandId = brand.id"
                    >
                        {{ brand.brand }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>
        <CarsList :id="selectedBrandId"/>
    </v-container>
</template>

<script>
import CarsList from "../components/CarsList";

export default {
    name: "Brands",
    components: {
        CarsList,
    },
    data: () => ({
        brands: [],
        dummy: [
            { id: 1, brand: "bmw", logo: "/img/a.jpg" },
            { id: 2, brand: "toyota", logo: "/img/b.jpg" },
            { id: 3, brand: "benz", logo: "/img/a.jpg" },
            { id: 4, brand: "audi", logo: "/img/b.jpg" },
        ],
        selectedBrandId: undefined,
    }),
    methods: {
        getBrands() {
            let url = "/car/get_brand?format=json";
            let self = this;

            this.$axios
                .post(url)
                .then((r) => {
                    self.brands = r.data;
                })
                .catch((e) => {
                    return e;
                });
        },
    },
    mounted() {
        // this.getBrands();
    },
};
</script>
