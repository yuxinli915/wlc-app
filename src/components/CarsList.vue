<template>
    <v-container>
        <v-list two-line>
            <v-list-item
                v-for="car in dummy"
                :key="car.id"
                @click="
                    $router.push({ name: 'Detail', params: { id: car.id } })
                "
            >
                <v-list-item-avatar>
                    pic
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title
                        v-text="car.car_name"
                    ></v-list-item-title>

                    <v-list-item-subtitle
                        >{{ car.min }} - {{ car.max }}</v-list-item-subtitle
                    >
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
    name: "CarsList",
    props: ["id"],
    data: () => ({
        cars: [],
        dummy: [
            {
                id: 1,
                car_name: "x1",
                pic: "/img/a.jpg",
                min: 20.11,
                max: 99.99,
            },
            {
                id: 2,
                car_name: "x3",
                pic: "/img/b.jpg",
                min: 21.11,
                max: 99.99,
            },
        ],
    }),
    methods: {
        getCars(id) {
            if (id != undefined) {
                let url = " /car/get_brand_car?format=json";
                let params = new FormData();
                let self = this;

                params.append("id", id);

                this.$axios
                    .post(url)
                    .then((r) => {
                        self.cars = r.data;
                    })
                    .catch((e) => {
                        return e;
                    });
            }
        },
    },
    mounted() {
        this.getCars(this.id);
    },
};
</script>
