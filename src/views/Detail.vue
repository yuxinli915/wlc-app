<template>
    <div>{{ id }}</div>
</template>

<script>
export default {
    name: "Detail",
    components: {},
    props: {
        id: {
            type: String,
        },
    },
    data() {
        return {
            detail: {},
        };
    },
    methods: {
        getCar() {
            let url = "/index/car/get_car";
            let params = new FormData();
            params.append("id", this.id);

            this.$axios
                .post(url, params)
                .then((r) => {
                    this.detail = r.data.data;
                    console.log(this.detail);
                })
                .catch((e) => e);
        },
    },
    mounted() {
        this.getCar();
    },
};
</script>
