<script>

    export default
    {
        beforeCreate()
        {
            sessionStorage.removeItem("SJlogin");
            sessionStorage.removeItem("SJtoken");
            this.$router.push('/sign-in ');
        }
    }

</script>