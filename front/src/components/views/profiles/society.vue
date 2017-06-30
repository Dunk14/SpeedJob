<template>
    <div>

        <div v-if="society">
            <h1>{{society.entr_socRea}}</h1>

            <hr />

            <div>
                <ul>
                    <li>
                        Contact :
                        <span v-if="society.entr_contact != null">{{society.entr_contact}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Téléphone :
                        <span v-if="society.entr_phone != null">{{society.entr_phone}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Email :
                        <span v-if="society.entr_mail != null">{{society.entr_mail}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Date de création :
                        <span v-if="society.entr_crea != null">{{society.entr_crea}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Nombre d'employés :
                        <span v-if="society.entr_nbEmp != null">{{society.entr_nbEmp}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Description :
                        <span v-if="society.entr_resume != null">{{society.entr_resume}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Ville :
                        <span v-if="society.entr_city != null">{{society.entr_city}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Zone d'activité :
                        <span v-if="society.entr_actArea != null">{{society.entr_actArea}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Adresse :
                        <span v-if="society.entr_streetNum">
                            {{society.entr_streetNum}}
                            <span v-if="society.entr_street != null">
                                {{society.entr_street}}
                            </span>
                        </span>

                        <span v-else>Non renseigné</span>
                    </li>
                    <li>
                        Site Web :
                        <span v-if="society.entr_webSite != null">{{society.entr_webSite}}</span>
                        <span v-else>Non renseigné</span>
                    </li>
                </ul>
            </div>

            <div>
                <v-btn dark flat @click="edit()">EDITER</v-btn>
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
                this.$router.push('/societyEdit');
            }
        }
    }
</script>

<style>
</style>