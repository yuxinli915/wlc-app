<template>
    <v-container>
        <v-row justify="space-around">
            <v-col>
                <v-chip-group>
                    <v-chip
                        v-for="brand in brands"
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
        this.getBrands();
    },
};
</script>
