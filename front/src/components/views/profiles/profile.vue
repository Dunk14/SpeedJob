<template>
    <div class="row">
        <div v-if="account == 'student'">
            <student></student>
        </div>

    </div>
</template>

<script>
    import Student from './student.vue'
    export default {
        data () {
            return {
                account: sessionStorage.getItem('SJaccount')
            }
        },
        components: {
            'student': Student
        }
    }
</script>

<style>
</style>