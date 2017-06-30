<template>
    <div>
        <h1>STUDENT</h1>
        <div v-if="student">
            Infos
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                student: null
            }
        },
        created () {
            this.$http.get('/back/api/students/'+sessionStorage.getItem('SJuid'), {
                headers: {'x-access-token': sessionStorage.getItem('SJtoken')}
            }).then(response =>
            {
                this.student = response.body
                console.log(this.student)
            }, response => {
                console.log("ERROR", response);
            })
        }
    }
</script>

<style>
</style>