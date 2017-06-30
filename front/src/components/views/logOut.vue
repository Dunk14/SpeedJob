<template>

</template>

<script>
    export default
    {
        beforeCreate()
        {
            sessionStorage.removeItem("SJlogin");
            sessionStorage.removeItem("SJtoken");
            sessionStorage.removeItem("SJuid");
            this.$router.push('/sign-in');
        }
    }
</script>