<template>
    <div class="position-absolute p-3 top-0 end-0" style="z-index: 11">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true"
             data-bs-toggle="toast" data-bs-delay="3000">
            <div class="toast-header">
                <strong class="me-auto">%title%</strong>
                <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast"
                        aria-label="Close"></button>
            </div>
            <div class="toast-body">
                %messages%
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",

    props: {
        headersPropses: {
            type: Array
        }
    },
}
</script>
