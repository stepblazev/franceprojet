<template>
    <div class="row row-cards">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Liste des contacts</h3>
                </div>
                <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap datatable">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Votre nom</th>
                            <th>Votre société</th>
                            <th>Votre téléphone</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="item in requestItem" :data-category-id="item.id">
                            <td>
                                {{ item.id }}
                            </td>
                            <td>
                                {{ item.data.yourEmail }}
                            </td>
                            <td>
                                {{ item.data.yourName }}
                            </td>
                            <td>
                                {{ item.data.yourSociety }}
                            </td>
                            <td>
                                {{ item.data.yourPhone }}
                            </td>
                            <td>
                                <template v-if="item.isStatus === 0">
                                    <span class="badge bg-danger me-1"></span> Nouveau
                                </template>
                                <template v-else>
                                    <span class="badge bg-success me-1"></span> Vu
                                </template>
                            </td>
                            <td>
                                {{ getDate(item.created_at) }}
                            </td>

                            <td class="text-nowrap text-muted">

                                <div v-if="item.isStatus === 0">
                                    <button class="btn btn-primary btn-sm" @click="setStatus(item.id)">Voir</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer d-flex align-items-center" v-if="totalItems >= 1">
                    <div class="pagination m-0 ms-auto">
                        <paginate
                                :page-count="totalItems"
                                :click-handler="get"
                                :prev-text="'&lsaquo;'"
                                :next-text="'&rsaquo;'"
                                :container-class="'pagination'"
                        >
                        </paginate>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment/min/moment-with-locales";
import RequestService from "../../services/request.service";
import Paginate from 'vuejs-paginate-next';
import {formData} from "@/services/libs/formData";


export default {
    name: "requestFormContact",
    components: {
        paginate: Paginate,
    },
    data() {
        return {
            requestItem: [],
            totalItems: 0,
            headerProps: [{
                breadcrumb: true,
                textBreadcrumb: 'Applications',
                nameRoute: 'users',
            }],
            initialDate: new Date().toISOString().substr(0, 10)
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);

        this.get(1);
    },
    methods: {
        getDate(date){
            return moment(date).locale(window.navigator.language).format('L h:mm')
        },
        get(pageNum){
            RequestService.getContact(pageNum).then((resp) => {
                this.requestItem = resp.data.items;

                if(pageNum === 1){
                    this.totalItems = resp.data.pagination.total / 20;
                }
            }).catch((error) => {});
        },

        setStatus(itemId) {
            RequestService.setStatus(formData({
                id: itemId,
                status: 1,
            })).then((resp) => {
                let item = this.requestItem.findIndex(x => x.id === parseInt(itemId));
                this.requestItem[item].isStatus = 1;
            }).catch((error) => {});
        },
    }
}
</script>
