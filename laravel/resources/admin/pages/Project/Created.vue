<template>
    <div class="page-body">
        <div class="container-fluid">
            <div class="row row-cards">
                <div class="col-12">
                    <div id="alert"></div>
                    <form class="card card-md" @submit.prevent="createdProject">
                        <div class="card-header">
                            <h4 class="card-title">Créer un projet</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="mb-3">
                                        <label class="form-label required">Date de publication</label>
                                        <input type="datetime-local"
                                               class="form-control"
                                               name="public_at"
                                               v-model="initialDate"/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label required">Lien vers la vidéo Youtube</label>
                                        <input type="text"
                                               class="form-control"
                                               name="youtube"
                                               @focus="hideError"
                                               @change="selectPhoto"
                                               v-bind:class="{'is-invalid': this.error.youtube}"
                                        />
                                        <div class="invalid-feedback"> {{ this.error.text.youtube }}</div>
                                        <span class="form-text text-muted">Lien vers la vidéo youtube - https://www.youtube.com/embed/</span>
                                    </div>
                                    <div class="card-header">
                                        <ul class="nav nav-tabs card-header-tabs" data-bs-toggle="tabs">
                                            <li v-for="(item, index) in langItem" class="nav-item">
                                                <a :href="'#lang-'+ item.value "
                                                   class="nav-link"
                                                   v-bind:class="{ 'active' : index === 0}"
                                                   data-bs-toggle="tab">{{ item.name }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <br/>
                                    <div class="tab-content">
                                        <div v-for="(item, index) in langItem" class="row tab-pane"
                                             v-bind:class="{ 'active show' : index === 0}"
                                             :id="'lang-' +  item.value">
                                            <div class="col-xl-12">
                                                <div class="row">

                                                    <div class="col-md-6 col-xl-12">
                                                        <div class="mb-3">
                                                            <label class="form-label required">Nom
                                                                {{ item.value.toUpperCase() }}</label>
                                                            <input type="text"
                                                                   class="form-control"
                                                                   :name="'title[' + item.value +']'"
                                                                   placeholder="Enter the title"/>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3">
                                                        <label class="form-label">Texte
                                                            {{ item.value.toUpperCase() }}</label>
                                                        <editor
                                                            api-key="szn6ulwrfsbhq7o2atiy1prelw2j30577a8fypibf93kwiok"
                                                            :name="'text[' + item.value +']'"
                                                            :id="item.value"
                                                            tag-name="textarea"
                                                            :init="{
                                                                height: 700,
                                                            }"
                                                            @change="saveContent"
                                                        />
                                                    </div>
                                                    <div class="col-md-6 col-xl-6">
                                                        <div class="mb-3">
                                                            <label class="form-label required">Block left
                                                                {{ item.value.toUpperCase() }}</label>
                                                            <textarea
                                                                class="form-control"
                                                                :name="'block_left[' + item.value +']'"
                                                                rows="10"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-xl-6">
                                                        <div class="mb-3">
                                                            <label class="form-label required">Block right
                                                                {{ item.value.toUpperCase() }}</label>
                                                            <textarea
                                                                class="form-control"
                                                                :name="'block_right[' + item.value +']'"
                                                                rows="10"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="mb-3">
                                        <label class="form-label">Statut</label>
                                        <div>
                                            <select name="status" class="form-select">
                                                <option value="1">Active</option>
                                                <option value="0">Aucun actif</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Photo</label>
                                        <span class="form-label-description"></span>
                                        <input
                                            ref="input"
                                            type="file"
                                            name="photo"
                                            class="form-control"
                                            v-bind:class="{'is-invalid': this.error.photo}"
                                            accept="image/*"
                                            @focus="hideError"
                                            @change="selectPhoto"/>
                                        <div class="invalid-feedback"> {{ this.error.text.photo }}</div>
                                    </div>
                                    <div class="mb-3" v-bind:class="{ 'd-none' : uploadImage === false}">
                                        <label class="form-label">Photo</label>
                                        <div class="row g-2">
                                            <div class="col-12 col-sm-12">
                                                <img :src="uploadImageFile" class="form-imagecheck-image" alt=""
                                                     style="opacity: 100;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-end">
                            <div class="d-flex">
                                <button class="btn btn-primary ms-auto">Créé</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArticlesService from "../../services/articles.service";
import {alert} from "@/services/libs/alert";
import UtilitiesService from "../../services/utilities.service";
import moment from "moment/min/moment-with-locales";
import Editor from '@tinymce/tinymce-vue'
import Articles from "@/pages/Articles/Main.vue";
import BlogsService from "@/services/blogs.service";
import ProjectsService from "@/services/projects.service";

export default {
    name: "projectCreated",
    components: {
        Articles,
        'editor': Editor
    },
    data() {
        return {
            headerProps: [{
                breadcrumb: true,
                textBreadcrumb: 'Créer un projet',
                nameRoute: 'project_created',
            }],
            uploadImage: false,
            uploadImageFile: '',
            langItem: [],
            error: {
                text: {
                    photo: null,
                    youtube: null,
                },
                photo: false,
                youtube: false,
            },
            saveContents: {},
            initialDate: moment().format('YYYY-MM-DDThh:mm')
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);

        UtilitiesService.getData().then((res) => {
            this.langItem = res.data.result.language;

            for (let i in res.data.result.language) {
                this.saveContents[res.data.result.language[i].value] = null;
            }
        });
    },
    methods: {
        saveContent(data){
            this.saveContents[data.target.id] = data.level.content;
        },
        createdProject(data) {
            let params = new FormData(data.target);
            for (let i in this.saveContents) {
                params.set('text[' + i + ']', this.saveContents[i])
            }

            ProjectsService.created(params).then((res) => {
                alert('Projet créé', 'success')

                setTimeout(() => {
                    this.$router.push("/admin/project/main");
                }, 2000);

            }).catch((error) => {
                if (error.response.data && error.response.data.errors) {
                    for (let i in error.response.data.errors) {
                        let text = error.response.data.errors[i][0];

                        if (this.error[i] !== undefined) {
                            this.error[i] = true;
                            this.error.text[i] = text;
                        }
                    }
                }
            });
        },

        selectPhoto(event) {
            let file = event.target.files;
            let reader = new FileReader();

            reader.onload = (e) => {
                this.uploadImage = false;
                this.uploadImage = true;
                this.uploadImageFile = e.target.result;
            };
            reader.readAsDataURL(file[0]);
        },

        hideError(el) {
            if (this.error[el.target.name] !== undefined) {
                this.error[el.target.name] = false;
            }
        },
    }
}
</script>
