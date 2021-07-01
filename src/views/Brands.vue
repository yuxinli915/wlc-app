<template>
    <v-container class="px-0">
        <v-sheet class="mx-auto">
            <v-slide-group class="px-0 py-2">
                <v-slide-item v-for="b in brands" :key="b.id">
                    <v-card
                        class="ma-1 py-3"
                        elevation="4"
                        @click="showCarsList(b.id)"
                        v-blur
                        height="150"
                        width="100"
                    >
                        <v-img
                            class="mx-auto"
                            height="75"
                            width="75"
                            :src="baseURL + b.logo"
                            contain
                        >
                        </v-img>
                        <v-card-title
                            align="center"
                            class="d-block py-1 text-subtitle-1"
                        >
                            {{ b.brand }}
                        </v-card-title>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
        <v-expand-transition>
            <CarsList :brandId="selectedBrandId" v-show="showList" />
        </v-expand-transition>
    </v-container>
</template>

<script>
import CarsList from "../components/CarsList";

export default {
    name: "Brands",
    components: {
        CarsList,
    },
    watch: {},
    data() {
        return {
            brands: [],
            selectedBrandId: undefined,
            baseURL: this.$store.getters.baseURL,
            showList: false,
        };
    },
    methods: {
        getBrands() {
            let url = "/index/car/get_brand";

            this.$axios
                .post(url)
                .then((r) => (this.brands = r.data.data))
                .catch((e) => e);
        },
        showCarsList(brandId) {
            if (this.showList) {
                if (this.selectedBrandId == brandId) {
                    this.showList = !this.showList;
                }
            } else {
                this.showList = true;
            }
            this.selectedBrandId = brandId;
        },
    },
    mounted() {
        this.getBrands();
    },
};
</script>
