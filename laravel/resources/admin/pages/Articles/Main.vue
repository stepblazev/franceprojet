<template>
    <div class="row row-cards">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">List of Nouvelles</h3>
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="ms-auto text-muted">
                                <RouterLink :to="{name: 'articles_created'}" class="btn btn-primary d-sm-inline-block">
                                    Created Nouvelles
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap datatable">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Statut</th>
                            <th>Date de création</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="item in newsItem" :data-category-id="item.id">
                            <td>
                                {{ item.id }}
                            </td>
                            <td>
                                {{ item.title }}
                            </td>
                            <td>
                                <template v-if="item.active === 0">
                                    <span class="badge bg-danger me-1"></span> Aucun actif
                                </template>
                                <template v-else>
                                    <span class="badge bg-success me-1"></span> Active
                                </template>
                            </td>
                            <td>
                                {{ getDate(item.public_at) }}
                            </td>
                            <td class="text-nowrap text-muted">
                                <span class="text-muted cursor-pointer" data-bs-toggle="dropdown">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M7 6a7.75 7.75 0 1 0 10 0"/>
                                        <line x1="12" y1="4" x2="12" y2="12"/>
                                    </svg>
                                </span>
                                <div class="dropdown-menu dropdown-menu-end" @click="status" :data-id="item.id">
                                    <div class="dropdown-item cursor-pointer" data-status-id="0" v-if="item.active === 1">
                                        Aucun actif
                                    </div>
                                    <div class="dropdown-item cursor-pointer" data-status-id="1" v-if="item.active === 0">
                                        Active
                                    </div>
                                </div>
                                <span class="text-muted cursor-pointer ms-2"
                                      @click="removeArticle"
                                      :data-id="item.id"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     class="icon icon-tabler icon-tabler-trash" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="4" y1="7" x2="20" y2="7"></line>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </span>

                                <RouterLink :to="{name: 'articles_edit', params: { id: item.id}}"
                                            class="text-muted cursor-pointer ms-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit-circle"
                                         width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z"></path>
                                        <path d="M16 5l3 3"></path>
                                        <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999"></path>
                                    </svg>
                                </RouterLink>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer d-flex align-items-center" v-if="totalItems >= 1">
                    <div class="pagination m-0 ms-auto">
                        <paginate
                            :page-count="totalItems"
                            :click-handler="getNews"
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
import ArticlesService from "../../services/articles.service";
import Paginate from 'vuejs-paginate-next';
import {formData} from "@/services/libs/formData";

export default {
    name: "articles",
    components: {
        paginate: Paginate,
    },
    data() {
        return {
            newsItem: [],
            totalItems: 0,
            headerProps: [{
                breadcrumb: true,
                textBreadcrumb: 'List Nouvelles',
                nameRoute: 'users',
            }],
            initialDate: new Date().toISOString().substr(0, 10)
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);

        this.getNews(1);
    },
    methods: {
        getDate(date){
            return moment(date).locale(window.navigator.language).format('L h:mm')
        },
        getNews(pageNum){
            ArticlesService.getArticles(pageNum).then((resp) => {
                this.newsItem = resp.data.items;

                if(pageNum === 1){
                    this.totalItems = resp.data.pagination.total / 20;
                }

            }).catch((error) => {});
        },
        status(event) {
            let itemId = parseInt(event.currentTarget.dataset.id);
            let statusId = parseInt(event.target.dataset.statusId);

            ArticlesService.setStatus(formData({
                id: itemId,
                status: statusId,
            })).then((resp) => {
                let item = this.newsItem.findIndex(x => x.id === itemId);

                this.newsItem[item].active = statusId;
            }).catch((error) => {
            });
        },


        removeArticle(event){
            let itemId = parseInt(event.currentTarget.dataset.id);

            ArticlesService.remove(formData({
                id: itemId,
            })).then((resp) => {
                let item = this.newsItem.findIndex(x => x.id === itemId);

                this.newsItem.splice(item, 1)
            }).catch((error) => {

            });
        },
    }
}
</script>
