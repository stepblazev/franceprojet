<template>
    <div class="container-tight py-4">
        <Form class="card card-md" @submit="submitLoginForm" :validation-schema="schema">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Authorization</h2>
                <div class="form-group">
                    <div v-if="message" class="alert alert-danger" role="alert">
                        {{ message }}
                    </div>
                </div>
                <div class="mb-3">
                    <Field class="form-control placeholder-no-fix"  type="text" value=""
                           autocomplete="off" placeholder="E-mail" name="email"/>

                    <ErrorMessage class="error-feedback" name="email"/>
                </div>
                <div class="mb-2">
                    <div class="input-group input-group-flat">
                        <Field class="form-control placeholder-no-fix" type="password" autocomplete="off"
                               placeholder="Password"
                               name="password"/>
                    </div>
                    <ErrorMessage name="password" class="error-feedback" />
                </div>
                <div class="form-footer">
                    <button class="btn btn-primary w-100"> Sign in</button>
                </div>
            </div>
        </Form>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            email: yup.string().required("Email field is required!"),
            password: yup.string().required("Password field is required!"),
        });

        return {
            headerProps: [{
                breadcrumb: false,
                textBreadcrumb: 'Авторизация',
                nameRoute: 'login',
            }],
            message: "",
            schema,
        }
    },
    mounted() {
        this.$emit('changeHeaderData', this.headerProps);
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },

    created() {
        if (this.loggedIn) {
            this.$router.push("/admin/request/main");
        }
    },

    methods: {
        submitLoginForm(user) {

            this.$store.dispatch("auth/login", user).then(
                () => {
                    this.$router.push("/admin/request/main");
                },
                (error) => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.messages) ||
                        error.message ||
                        error.toString();
                }
            );

        }
    }
}

</script>
