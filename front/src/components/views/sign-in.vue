<style lang="scss">
    body {
        background: #f5f6f6;
        background: -moz-linear-gradient(top, #f5f6f6 0%, #dbdce2 21%, #b8bac6 49%, #dddfe3 80%, #f5f6f6 100%);
        background: -webkit-linear-gradient(top, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);
        background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#f5f6f6',GradientType=0 );
        text-align: center;    
    }

    .subWindow
    {
        background: #f5f6f6;
        background: -moz-linear-gradient(top, #f5f6f6 0%, #dbdce2 21%, #b8bac6 49%, #dddfe3 80%, #f5f6f6 100%);
        background: -webkit-linear-gradient(top, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);
        background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#f5f6f6',GradientType=0 );
        text-align: center;
        position: absolute;
        width: 80%;
        height: 95%;
        top: 2%;
        left: 10%;
        box-shadow: 1px 1px 12px #555;
    }

    .grey-background
    {
       /* opacity: 0.5;*/
        /*background-color: grey;*/
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 100%;

    }

    .form__connexion, .form__registration {
        border-radius: 5px;
        transition: all .3s linear;
        overflow: hidden;
    }
    
    .form__connexion {
        text-align: left;
    }
    
    .form__registration {
        text-align: right;
    }

    .form__connexion:hover, .form__registration:hover {
        background-color: rgba(220,220,220,0.6);
        padding: 10px;
    }

    .title {
        border-color: rgb(180,180,180);
        border-left-style: solid;
        border-top-style: solid;
        padding: 15px;
    }
    
    .hasError
    {
        color: red;
        font-weight: bold;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>

<template>
    <div>
        <div class="container">
            <div class="row">

                <div class="col-sx-12">
                    <div class="title">
                        <h1 class="logo text-align">SpeedJob</h1>

                        <p>Plateforme d'embauche entre les entreprises et l'école du numérique IMIE</p>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-offset-2 col-sm-4">
                    <div class="form__connexion">
                        <h4>Déjà membre ?</h4>

                        <p class="col-xs-12 hasError">{{hasError}}</p>

                        <form>
                            <v-text-field class="col-xs-12"
                                          type="text"
                                          label="Votre identifiant..."
                                          v-model="login"
                                          name="login"
                                          v-bind:error="error"
                                          @keyup.enter.native="logIn()"></v-text-field>

                            <v-text-field class="col-xs-12"
                                          type="password"
                                          label="Mot de passe"
                                          v-model="password"
                                          name="password"
                                          v-bind:error="error"
                                          @keyup.enter.native="logIn()"></v-text-field>

                            <v-btn @click.native="logIn()" @keyup.enter.native="logIn()" block>
                                Se connecter
                            </v-btn>
                        </form>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-4">
                    <div class="form__registration">
                        <h6>Vous êtes chef d'entreprise et cherchez rapidement un étudiant conforme à vos attentes ?</h6>

                        <h5>N'hésitez pas un instant de plus et inscrivez-vous ici <v-icon>arrow_downward</v-icon></h5>

                        <v-btn @click.native="showSub()" block>
                            S'inscrire
                        </v-btn>
                    </div>
                </div>

            </div>





        </div>

        <transition name='fade'>
            <div class='grey-background' v-if='show' v-on:click="show = !show"></div>
        </transition>

        <transition name='fade'>
            <div class='subWindow' v-if='show'>
                <subscribe></subscribe>
            </div>
        </transition>
    </div>

</template>

<script>
    import Subscribe from './subscribe.vue'

    export default {
        components: {
            'subscribe': Subscribe
        },
        data() {
            return{
                login: "",
                password: "",
                hasError: "",
                show: false,
                error: false,
            }
        },
        methods: {
            logIn() {
                let login = this.login;
                let password = this.password;

                this.$http.post('/api/authenticate', {login: login, password: password}).then(response =>
                {
                    if (response.body.success) {
                        sessionStorage.setItem("SJlogin", login);
                        sessionStorage.setItem("SJtoken", response.body.token);
                        sessionStorage.setItem("SJaccount", response.body.account);
                        this.$router.push('/home')
                    } else {
                        console.log("ERROR", this.hasError);
                        this.hasError = "Une erreur s'est produite lors de la connexion !";
                        this.error = true;
                    }
                }, response => {
                    console.log("ERROR", response);
                })
            },
            showSub() {
                this.show = true;
            }
        }
    }
</script>