<template>
    <div>
        <h1>Profil</h1>
    </div>
</template>

<script>
    export default {
        created () {
            this.$http.post('/api/authenticate', {login: login, password: password}).then(response =>
            {
                if (response.body.success) {
                    sessionStorage.setItem("SJlogin", login);
                    sessionStorage.setItem("SJtoken", response.body.token);
                    this.$router.push('/home')
                } else {
                    console.log("ERROR", this.hasError);
                    this.hasError = true;
                }
            }, response => {
                console.log("ERROR", response);
            })
        }
    }
</script>

<style>
</style>