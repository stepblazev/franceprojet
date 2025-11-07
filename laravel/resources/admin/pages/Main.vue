<template>
    <div class="row row-cards">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="subheader">Admin Panel Site.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main",
    data() {
        return {
            headerProps: [{
                breadcrumb: true,
                textBreadcrumb: 'Main',
                nameRoute: 'main',
            }]
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);
    }
}
</script>

<style scoped>

</style>
