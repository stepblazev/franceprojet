<script setup>
import {
    RouterLink,
    RouterView
} from "vue-router";
</script>

<template>
    <div class="page" >
        <Header v-bind:headersPropses="headerProps"/>
        <div class="page-wrapper">
            <Breadcrumb v-bind:headersPropses="headerProps"/>
            <div class="page-body">
                <div class="container-fluid">
                    <router-view v-slot="{ Component }">
                        <component :is="Component" @changeHeaderData="changeHeaderInfo"/>
                    </router-view>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "../admin/components/Header.vue";
import Footer from "../admin/components/Footer.vue";
import Breadcrumb from "../admin/components/Breadcrumb.vue";

export default {
    components: {
        Header,
        Footer,
        Breadcrumb
    },
    data() {
        return {
            headerProps: [{
                breadcrumb: false,
                textBreadcrumb: '',
                nameRoute: '',
            }]
        }
    },
    created() {

    },
    mounted() {
    },
    methods: {
        changeHeaderInfo(data){
            this.headerProps = data;
        },
    }
}

</script>

