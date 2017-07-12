<style>

    .society
    {
        font-size: 24px;
    }

    .society__null {
        opacity: 0.6;
    }

    .society__icon, .edit__icon {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .edit__icon {
        border-radius: 50px;
        padding: 10px;
        margin-left: 20px;
        opacity: 0.3;
        transition: all .3s linear;
    }

    .edit__icon:hover {
        background-color: rgba(220,220,220,0.6);
        cursor: pointer;
        opacity: 1;
    }

</style>


<template>
    <div>

        <div v-if="society" class="society">
            <h2><v-icon class="society__icon">business_center</v-icon>{{society.entr_socRea | capitalize}} <v-icon class="edit__icon" v-on:click="edit()">mode_edit</v-icon></h2>

            <div>

                <div class="col-xs-12">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <span v-if="society.entr_resume">{{society.entr_resume | capitalize}}</span>
                            <span v-else class="society__null">Aucune description</span>
                        </v-card-text>
                    </v-card>
                </div>


                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="contact__icon">supervisor_account</v-icon>
                            <span v-if="society.entr_contact">{{society.entr_contact | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="phone__icon">call</v-icon>
                            <span v-if="society.entr_phone">{{society.entr_phone | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="mail__icon">email</v-icon>
                            <span v-if="society.entr_mail">{{society.entr_mail | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="crea__icon">event</v-icon>
                            <span v-if="society.entr_crea">Création : {{society.entr_crea | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="nbEmp__icon">perm_identity</v-icon>
                            <span v-if="society.entr_nbEmp">{{society.entr_nbEmp | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="location__icon">location_city</v-icon>
                            <span v-if="society.entr_city">{{society.entr_city | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="actArea__icon">business</v-icon>
                            <span v-if="society.entr_actArea">{{society.entr_actArea | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="adresse__icon">location_city</v-icon>
                            <span v-if="society.entr_streetNum">{{society.entr_streetNum | capitalize}}
                                <span v-if="society.entr_street">
                                    {{society.entr_street}}
                                </span>
                            </span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-icon class="webSite__icon">link</v-icon>
                            <span v-if="society.entr_webSite">{{society.entr_webSite | capitalize}}</span>
                            <span v-else class="society__null">Non renseigné</span>
                        </v-card-text>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                society: null
            }
        },
        created () {
            this.$http.get('/back/api/societies/'+sessionStorage.getItem('SJuid'), {
                headers: {'x-access-token': sessionStorage.getItem('SJtoken')}
            }).then(response =>
            {
                this.society = response.body;
                console.log(this.society);
            }, response => {
                console.log("ERROR", response);
            })
        },
        methods: {
            edit() {
                console.log("ROUTTTTEEE");
                this.$router.push('/SocietyEdit');
            }
        }
    }
</script>

