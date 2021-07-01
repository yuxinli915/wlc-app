<template>
    <v-app id="app">
        <div id="nav" align="center">
            <router-link to="/" class="black--text">Home</router-link> |
            <router-link to="/brands" class="black--text">Brands</router-link>
        </div>
        <router-view />
    </v-app>
</template>
