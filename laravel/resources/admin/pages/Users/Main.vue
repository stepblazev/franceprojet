<template>
    <div class="row row-cards">
        <div class="col-xl-9">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Список пользователей</h3>
                </div>
                <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap datatable">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Дата регистрации</th>
                            <th>Последняя активность</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="item in usersItem" :data-user-id="item.id">
                            <td>
                                {{ item.id }}
                            </td>
                            <td>
                                {{ item.name }}
                            </td>
                            <td>
                                {{ item.balance }} / {{ item.hold_balance }} (hold)
                            </td>
                            <td>
                                <template v-if="item.is_status === 0">
                                    <span class="badge bg-danger me-1"></span> Заблокирован
                                </template>
                                <template v-else>
                                    <span class="badge bg-success me-1"></span> Активен
                                </template>
                            </td>
                            <td>
                                {{ getDate(item.created_at) }}
                            </td>
                            <td>
                                {{ getDate(item.updated_at) }}
                            </td>
                            <td class="text-nowrap text-muted">
                                    <span class="text-muted cursor-pointer"
                                          data-bs-toggle="dropdown"
                                          data-bs-placement="bottom"
                                          data-bs-original-title="Статус">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M7 6a7.75 7.75 0 1 0 10 0"/>
                                            <line x1="12" y1="4" x2="12" y2="12"/>
                                        </svg>
                                    </span>
                                <div class="dropdown-menu dropdown-menu-end userStatus">
                                    <div class="dropdown-item cursor-pointer" data-status-id="0">
                                        Отключен
                                    </div>
                                    <div class="dropdown-item cursor-pointer" data-status-id="1">
                                        Активный
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Фильтр</h3>
                </div>
                <form class="card-body" @submit.prevent="search" id="usersSearch">
                    <div class="row row-cards">
                        <div class="mb-3">
                            <label class="form-label required">Имя клиента</label>
                            <input type="text" class="form-control" name="name" placeholder="Введите имя клиента">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Номер телефона</label>
                            <input type="text" class="form-control" name="phone" placeholder="Введите номер телефона">
                        </div>
                        <div class="mb-3">
                            <label class="form-label required">Дата регистрации</label>
                            <input type="date" class="form-control" name="date">
                        </div>
                    </div>
                </form>
                <div class="card-footer text-end">
                    <button class="btn btn-primary" form="usersSearch">
                        Фильтр
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UsersService from "../../services/users.service";
import moment from "moment/min/moment-with-locales";

export default {
    name: "users",
    data() {
        return {
            usersItem: [],
            headerProps: [{
                breadcrumb: true,
                textBreadcrumb: 'Пользователи',
                nameRoute: 'users',
            }],
            initialDate: new Date().toISOString().substr(0, 10)
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);

        UsersService.getUsers().then((resp) => {
            this.usersItem = resp.data.users;
        }).catch((error) => {

        });
    },
    methods: {
        getDate(date){
            return moment(date).locale(window.navigator.language).format('L h:mm')
        },
        search(data){

            UsersService.getSearch(data.target).then((resp) => {
                let data = resp.data.users;

                if(data.length > 0){
                    this.usersItem = data;
                }
            });
        }
    }
}
</script>
