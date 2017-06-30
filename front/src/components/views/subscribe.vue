<style>
    .hasError
    {
        color: red;
        font-weight: bold;
        margin-bottom: 0px;
    }

    .disclaimer {margin-bottom: 0px;}

</style>

<template>
    <div>
        <h2>Subscribe Vue</h2>

        <p class="disclaimer">Afin de procéder à votre inscription merci de remplir les champs ci-dessous (chaque champs est obligatoire)</p>

        <div class="subForm col-xs-12 col-sm-offset-3 col-sm-6">

            <!-- ERROR MESSAGE -- ONLY DISPLAY IF ERROR OCCURS ON THE FIELDS -->
            <p class="col-xs-12 hasError" v-show="errorBool.errLog">{{errorMess.errLog}}</p>
            <p class="col-xs-12 hasError" v-show="errorBool.errPass">{{errorMess.errPass}}</p>
            <p class="col-xs-12 hasError" v-show="errorBool.errMail">{{errorMess.errMail}}</p>
            <p class="col-xs-12 hasError" v-show="errorBool.errSocRai">{{errorMess.errSocRai}}</p>
            <p class="col-xs-12 hasError" v-show="errorBool.errTel">{{errorMess.errTel}}</p>
            <p class="col-xs-12 hasError" v-show="errorBool.errVille">{{errorMess.errVille}}</p>

            <form>
                <v-text-field class="col-xs-12"
                              type="text"
                              label="Votre identifiant"
                              v-model="login"
                              v-bind:error="errorBool.errLog"
                              name="login"></v-text-field>

                <v-text-field class="col-xs-12"
                              type="password"
                              label="Mot de passe"
                              v-model="password"
                              v-bind:error="errorBool.errPass"
                              name="password"></v-text-field>

                <v-text-field class="col-xs-12"
                              type="password"
                              label="Confirmation mot de passe"
                              v-model="confirmPassword"
                              v-bind:error="errorBool.errPass"
                              name="confirmPassword"></v-text-field>

                <v-text-field class="col-xs-12"
                              type="text"
                              label="Votre email de contact"
                              v-model="email"
                              v-bind:error="errorBool.errMail"
                              name="email"></v-text-field>

                <v-text-field class="col-xs-12"
                              type="text"
                              label="Raison social de votre entreprise"
                              v-model="socRai"
                              v-bind:error="errorBool.errSocRai"
                              name="socRai"></v-text-field>

                <v-text-field class="col-xs-12"
                              type="number"
                              label="Le numéro de téléphone de votre entreprise"
                              v-model="tel"
                              v-bind:error="errorBool.errTel"
                              name="tel"></v-text-field>

                <v-text-field class="col-xs-12"
                              type="text"
                              label="Votre ville d'activité"
                              v-model="ville"
                              v-bind:error="errorBool.errVille"
                              name="ville"></v-text-field>

                <!-- Captcha verification -->
               <!-- <div class="g-recaptcha" :data-sitekey="rcapt_sig_key"></div> -->


                <v-btn @click.native="subscribe()" @keyup.enter.native="subscribe()" block>
                    S'inscrire
                </v-btn>
            </form>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                // get fields content
                login: "",
                password: "",
                confirmPassword: "",
                email: "",
                socRai: "",
                tel: "",
                ville: "",

                // Error message for each field
                errorMess: {
                    errLog: "",
                    errPass: "",
                    errMail: "",
                    errSocRai: "",
                    errVille: "",
                    errTel: "",
                },

                // Error boolean for each field (use to activate rule "error" from vuejs)
                errorBool: {
                    errLog: false,
                    errPass: false,
                    errMail: false,
                    errSocRai: false,
                    errVille: false,
                    errTel: false,
                },
                valid: true,


                // Captcha utils TO DO
               // rcapt_sig_key: "YOUR KEY FROM GOOGLE",
               // rcapt_id: 0 // will be used later
            }
        },
        methods: {
            subscribe() {
                let login = this.login;
                let password = this.password;
                let confirmPassword = this.confirmPassword;
                let email = this.email;
                let socRai = this.socRai;
                let ville = this.ville;
                let tel = this.tel;

                for(let bool in this.errorBool)
                {
                   this.errorBool[bool] = false;
                }

                let fields = {
                    login :"login",
                    password: "password",
                    email: "email",
                    socRai: "socRai",
                    ville: "ville",
                    tel: "tel"
                };

                // Go through each field to check validity
                for(let field in fields)
                {
                    switch(field)
                    {
                        case "login":
                            if(login == "")
                            {
                                this.errorMess.errLog = "Le champs Login est vide !";
                                this.errorBool.errLog = true;
                                this.valid = false;
                            }
                            break;
                        case "password":
                            if(password == "")
                            {
                                this.errorMess.errPass = "Le champs mot de passe est vide !";
                                this.errorBool.errPass = true;
                                this.valid = false;
                            }else
                            {
                                if(password != confirmPassword)
                                {
                                    this.errorMess.errPass += "Vos mots de passe de correspondent pas !";
                                    this.errorBool.errPass = true;
                                    this.valid = false;
                                }
                            }

                            break;
                        case "email":
                            if(email == "")
                            {
                                this.errorMess.errMail = "Le champs email est vide !";
                                this.errorBool.errMail = true;
                                this.valid = false;
                            }else
                            {
                                var re = /[\d\w]+@[\w]+\.\w{2,3}/;
                                var validateEmail = re.test(email);

                                if(!validateEmail)
                                {
                                    this.errorMess.errMail = "Votre email est invalide !";
                                    this.errorBool.errMail = true;
                                    this.valid = false;
                                }
                            }
                            break;
                        case "socRai":
                            if(socRai == "")
                            {
                                this.errorMess.errSocRai = "Le champ Raison social est vide !";
                                this.errorBool.errSocRai = true;
                                this.valid = false;
                            }
                            break;
                        case "ville":
                            if(ville == "")
                            {
                                this.errorMess.errVille = "Le champ ville est vide !";
                                this.errorBool.errVille = true;
                                this.valid = false;
                            }
                            break;
                        case "tel":
                            if(tel.length != 10)
                            {
                                this.errorMess.errTel = "Votre téléphone est invalide (10 chiffres !) !";
                                this.errorBool.errTel = true;
                                this.valid = false;
                            }
                            break;
                    }
                }

                if(this.valid)
                {
                    this.$http.post("/api/subscribe",
                        {
                            login: login,
                            password: password,
                            email: email,
                            socRai: socRai,
                            ville: ville,
                            tel: tel
                        }).then(response => {
                        if (response.body.success) {
                            sessionStorage.setItem("SJlogin", login);
                            sessionStorage.setItem("SJtoken", response.body.token);
                            this.$router.push('/home');
                        } else {
                            console.log("ERROR");
                        }
                    });


                }
            }
        },
       /*  TO IMPLEMENT
        mounted() {
            if (window.grecaptcha) {
                this.rcapt_id = grecaptcha.render( $('.g-recaptcha')[0], { sitekey : this.rcapt_sig_key });
            }
        },*/
    }

</script>