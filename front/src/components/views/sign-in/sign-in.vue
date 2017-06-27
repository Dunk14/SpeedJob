<template>
    <div class="container">
        <div class="row">

            <div class="col-sx-12">
                <h1 class="logo text-align">SpeedJob</h1>

                <p>Plateforme d'embauche entre les entreprises et l'école du numérique IMIE</p>
            </div>

            <div class="col-xs-12 col-sm-offset-2 col-sm-4">
                <h4>Déjà membre sectaire ?</h4>

                <form>
                    <mdl-textfield class="col-xs-12"
                                   type="text"
                                   label="Votre identifiant..."
                                   :class="{hasError: hasError}"
                                   v-model="login"
                                   name="login"
                                   floating-label></mdl-textfield>

                    <mdl-textfield class="col-xs-12"
                                   type="password"
                                   label="Mot de passe"
                                   :class="{hasError: hasError}"
                                   v-model="password"
                                   name="password"
                                   floating-label></mdl-textfield>

                    <button class="col-xs-12"
                            mdl-button
                            mdl-ripple
                            mdl-colored="primary"
                            @click="logIn()"
                            type="submit">
                        Se connecter
                    </button>
                </form>
            </div>

            <div class="col-xs-12 col-sm-4">
                <h4>Vous ne tenez plus en place et désirez de suite enroler un de nos valeureux guerriers du numérique ?!</h4>

                <h3>N'hésitez pas un instant de plus et inscrivez-vous ici :</h3>

                <button mdl-button
                        mdl-ripple
                        mdl-colored="primary"
                        @click="subscribe()"
                        type="submit">
                    S'inscrire
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {

        data()
        {
            return{
                login: "",
                password: "",
                hasError: true
            }
        },
        methods:
            {
                logIn()
                {
                    let login = this.login;
                    let password = this.password;

                    this.$http.post('/api/authenticate', {login: login, password: password}).then(response =>
                    {
                        if(response.body.success)
                        {
                            sessionStorage.setItem("login", login);
                            sessionStorage.setItem("token", response.body.token);
                            console.log("SESSION", sessionStorage);
                        }else
                        {
                            console.log("ERROR", this.hasError);
                            this.hasError = true;
                        }
                    }, response =>
                    {
                        console.log("ERROR", response);
                    })
                }
            }
    }


</script>

<style>
    .hasError {border-color: red;}
</style>
