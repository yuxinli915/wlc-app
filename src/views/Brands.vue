<template>
    <v-container>
        <v-card>
            <v-tabs show-arrows>
                <v-tab
                    v-for="i in brands"
                    :key="i.id"
                    @click="selectedBrandId = i.id"
                    >{{ i.brand }}</v-tab
                >
            </v-tabs>
        </v-card>
        <CarsList :id="selectedBrandId" />
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
        reload: 0,
    }),
    methods: {
        getBrands() {
            let url = "/index/car/get_brand?format=json";
            let self = this;

            this.$axios
                .post(url)
                .then((r) => {
                    self.brands = r.data.data;
                })
                .catch((e) => {
                    return e;
                });
        },
        debug(any) {
            console.log(any);
        },
    },
    mounted() {
        this.getBrands();
    },
};
</script>
