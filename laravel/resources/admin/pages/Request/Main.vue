<template>
    <div class="row row-cards">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Les demandes du concepteur</h3>
                </div>
                <div class="table-responsive">
                    <table class="table table-vcenter card-table  ">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Quelles chambres</th>
                            <th>Quel genre de réparation</th>
                            <th>Carré (m2)</th>
                            <th>Une date</th>
                            <th>Un budget</th>
                            <th>Quelle est votre situation</th>
                            <th>Nom et prénom</th>
                            <th>Numéro de téléphone</th>
                            <th>Address</th>
                            <th>Message</th>
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
                                {{ getRepair(item.data.typeofRenovation) }}
                            </td>
                            <td>
                                {{ getService(item.data.service) }}
                            </td>
                            <td>
                                {{ item.data.surfaceAreaRenovated }}
                            </td>
                            <td>
                                {{ getDate(item.data.aDate) }}
                            </td>
                            <td>
                                {{ item.data.budget }}€
                            </td>
                            <td>
                                {{ getWhatTypeOfService(item.data.whatTypeOfService) }}
                            </td>
                            <td>
                                {{ item.data.yourName }}
                            </td>
                            <td>
                                {{ item.data.yourPhone }}
                            </td>
                            <td>
                                {{ item.data.address }}
                            </td>
                            <td>
                                {{ item.data.aboutWork }}
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

    <FsLightbox
        :toggler="toggler"
        :sources="CustomSource"
    />

</template>

<script>
import moment from "moment/min/moment-with-locales";
import RequestService from "../../services/request.service";
import Paginate from 'vuejs-paginate-next';
import {formData} from "@/services/libs/formData";
import FsLightbox from "fslightbox-vue/v3";


export default {
    name: "requestFormAll",
    components: {
        paginate: Paginate,
        FsLightbox
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
            toggler: false,
            CustomSource: {},
            initialDate: new Date().toISOString().substr(0, 10),

            service: {
                kitchen: 'Cuisine',
                bathroom: 'Salle de bain',
                bedroom: 'Chambre',
                lounge: 'Salon',
            },
            typeofRenovation: {
                completeRenovation: 'Une rénovation complète',
                refreshing: 'Un rafraîchissement',
            },
            whatTypeOfService: {
                owner: 'Propriétaire',
                tenant: 'Locataire',
            }
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);

        this.get(1);
    },
    methods: {

        getService(service){
            let json = JSON.parse(service);
            let names = [];

            for (let i in json) {
                if(this.service[json[i].name] !== undefined){
                    names.push(this.service[json[i].name])
                } else {
                    names.push(json[i].name)
                }
            }

            return names.join(', ')
        },
        getRepair(typeofRenovation){
            return typeofRenovation ? this.typeofRenovation[typeofRenovation] : typeofRenovation;
        },

        getWhatTypeOfService(whatTypeOfService){
            return whatTypeOfService ? this.whatTypeOfService[whatTypeOfService] : whatTypeOfService;
        },

        getDate(date){
            return moment(date).locale(window.navigator.language).format('L h:mm')
        },
        get(pageNum){
            RequestService.get(pageNum).then((resp) => {
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
        openLightbox(files) {
            this.CustomSource = files;
            this.toggler = !this.toggler
        }
    }
}
</script>
