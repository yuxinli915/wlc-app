<template>
    <v-container>
        <v-row v-if="loading">
            <v-col align="center">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </v-col>
        </v-row>
        <v-row v-if="!loading && cars.length != 0">
            <v-col>
                <v-card
                    v-for="car in cars"
                    :key="car.id"
                    class="primary px-3 mb-5"
                    @click="goToDetail(car.id)"
                >
                    <v-row>
                        <v-col cols="6" justify="center">
                            <v-row>
                                <v-col>
                                    {{ car.car_name }}
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="pt-0">
                                    ${{ car.min_price }} - ${{ car.max_price }}
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-sheet rounded class="py-2">
                                <v-img
                                    max-height="70px"
                                    contain
                                    :src="baseURL + car.pic"
                                >
                                </v-img>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-if="!loading && cars.length == 0">
            <v-col align="center">
                No car
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "CarsList",
    props: {
        brandId: {
            type: Number,
        },
    },
    watch: {
        brandId: {
            handler() {
                this.getCars();
            },
        },
    },
    data() {
        return {
            cars: [],
            baseURL: this.$store.getters.baseURL,
            loading: true,
        };
    },
    methods: {
        getCars() {
            if (this.brandId != undefined) {
                this.loading = true;
                let url = "/index/car/get_brand_car";
                let params = new FormData();
                params.append("id", this.brandId);

                this.$axios
                    .post(url, params)
                    .then((r) => {
                        this.cars = r.data.data;
                        this.loading = false;
                    })
                    .catch((e) => e);
            }
        },
        goToDetail(id) {
            this.$router.push({
                name: "Detail",
                params: { id: id },
            });
        },
    },
    mounted() {},
};
</script>
