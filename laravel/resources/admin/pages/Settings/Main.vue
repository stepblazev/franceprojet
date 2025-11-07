<template>
    <div class="page-body">
        <div class="container-fluid">
            <div class="row row-cards">
                <div class="col-12">
                    <div id="alert"></div>
                    <form class="card card-md" @submit.prevent="saveSettings">
                        <div class="card-header">
                            <h4 class="card-title">Settings</h4>
                        </div>
                        <div class="card-body">

                            <div class="mb-3">
                                <label class="form-label required">Токен бота</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Токен бота" autocomplete="off"
                                           name="token" :value="token"/>
                                </div>
                                <div class="invalid-feedback"></div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label required">ID канала на телеграм</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="ID канала на телеграм" autocomplete="off"
                                           name="channelId" :value="channelId"/>
                                </div>
                                <div class="invalid-feedback"></div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label required"> Language </label>
                                <div>
                                    <select name="lang" class="form-select" v-model="lang">
                                        <option v-for="item in languageItems" :key="item" :value="item.id" :selected="lang">{{ item.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-end">
                            <div class="d-flex">
                                <button class="btn btn-primary ms-auto">Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SettingsService from "../../services/settings.service";
import {Field, Form} from "vee-validate";
import {alert} from "@/services/libs/alert";

export default {
    name: "Main",
    components: {
        Form,
        Field,
    },
    data() {
        return {
            lang: 0,
            channelId: 0,
            token: null,
            languageItems: {},
            headerProps: [{
                breadcrumb: true,
                textBreadcrumb: 'Settings',
                nameRoute: 'settings',
            }]
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);

        SettingsService.getSettings().then((resp) => {
            for (let i in resp.data.config){
                this[resp.data.config[i].key] = resp.data.config[i].value;
            }
            this.languageItems = resp.data.language;
        }).catch((error) => {

        });
    },

    methods: {
        saveSettings(data){
            SettingsService.setSettings(data.target).then((resp) => {
                alert('Settings saved', 'success')
            }).catch((error) => {
                alert('Error saving settings', 'danger')
            });
        }
    }
}
</script>
