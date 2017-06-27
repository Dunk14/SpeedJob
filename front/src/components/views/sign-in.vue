<style lang="scss">
    body {
        background: #f5f6f6;
        background: -moz-linear-gradient(top, #f5f6f6 0%, #dbdce2 21%, #b8bac6 49%, #dddfe3 80%, #f5f6f6 100%);
        background: -webkit-linear-gradient(top, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);
        background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#f5f6f6',GradientType=0 );
    }

    .form__connexion, .form__registration {
        border-radius: 5px;
        transition: all .3s linear;
        overflow: hidden;
    }

    .form__connexion:hover, .form__registration:hover {
        background-color: rgba(220,220,220,0.6);
        padding: 10px;
    }
</style>

<template>
    <div class="container">
        <div class="row">

            <div class="col-sx-12">
                <h1 class="logo text-align">SpeedJob</h1>

                <p>Plateforme d'embauche entre les entreprises et l'école du numérique IMIE</p>
            </div>

            <div class="col-xs-12 col-sm-offset-2 col-sm-4">
                <div class="form__connexion">
                    <h4>Déjà membre ?</h4>

                    <form>
                        <v-text-field class="col-xs-12"
                                      type="text"
                                      label="Votre identifiant..."
                                      v-model="login"
                                      name="login"
                                      @keyup.enter.native="logIn()"></v-text-field>

                        <v-text-field class="col-xs-12"
                                      type="password"
                                      label="Mot de passe"
                                      v-model="password"
                                      name="password"
                                      @keyup.enter.native="logIn()"></v-text-field>

                        <v-btn @click.native="logIn()" @keyup.enter.native="logIn()" block>
                            Se connecter
                        </v-btn>
                    </form>
                </div>
            </div>

            <div class="col-xs-12 col-sm-4">
                <div class="form__registration">
                    <h5>Vous êtes chef d'entreprise et cherchez rapidement un étudiant conforme à vos attentes ?</h5>

                    <h4>N'hésitez pas un instant de plus et inscrivez-vous ici <v-icon>arrow_downward</v-icon></h4>

                    <v-btn @click.native="subscribe()" block>
                        S'inscrire
                    </v-btn>
                </div>
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