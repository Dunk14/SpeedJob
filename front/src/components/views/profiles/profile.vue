<template>
    <div class="row">
        <div v-if="account == 'student'">
            <student></student>
        </div>

        <div v-if="account == 'society'">
            <society></society>
        </div>

    </div>
</template>

<script>
    import Student from './student.vue'
    import Society from './society.vue'

    export default {
        data () {
            return {
                account: sessionStorage.getItem('SJaccount')
            }
        },
        components: {
            'student': Student,
            'society': Society
        }
    }
</script>

<style>
</style>