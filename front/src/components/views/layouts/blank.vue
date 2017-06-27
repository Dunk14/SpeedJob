<template>
    <router-view></router-view>
</template>

<script>
    export default {
        beforeCreate () {
            if (this.$route.path == "/")
                this.$router.push('/sign-in')
            else if (sessionStorage.getItem('SJlogin') && sessionStorage.getItem('SJtoken'))
                this.$router.push('/home')
        }
    }
</script>

<style>
</style>