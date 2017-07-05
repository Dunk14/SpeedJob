<template>

    <div>
        <h1>Edit du profil</h1>

        <p>Rentrez et validez les champs que vous souhaitez changer</p>

        <form>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Raison Social"
                          v-model="fields.entr_socRea"
                          prepend-icon="create"
                          name="entRaiSoc"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="text"
                          label="Contact de l'entreprise"
                          v-model="fields.entr_contact"
                          prepend-icon="person"
                          name="entContact"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="number"
                          label="Numéro de téléphone de contact"
                          v-model="fields.entr_phone"
                          prepend-icon="phone"
                          name="entTel"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="text"
                          label="Email de contact"
                          v-model="fields.entr_mail"
                          prepend-icon="email"
                          name="entEmail"></v-text-field>

            <!-- DATE PICKER FIELD -->
            <v-menu  class="col-xs-12"
                     lazy
                     :close-on-content-click="false"
                     v-model="menu"
                     transition="v-scale-transition"
                     offset-y
                     full-width
                     :nudge-left="40"
                     max-width="290px" >
                <v-text-field
                              slot="activator"
                              label="Date de création"
                              prepend-icon="event"
                              readonly
                              v-model="fields.entr_crea"
                              name="entCrea"></v-text-field>
                <v-date-picker v-model="fields.entr_crea" no-title scrollable actions>
                    <template scope="{ save, cancel }">
                        <v-card-row actions>
                            <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                            <v-btn flat primary @click.native="save()">Save</v-btn>
                        </v-card-row actions>
                    </template>
                </v-date-picker>
            </v-menu>


            <v-text-field class="col-xs-12"
                          type="number"
                          label="Nombre d'employés"
                          v-model="fields.entr_nbEmp"
                          prepend-icon="create"
                          name="entNbEmp"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="textfield"
                          label="Description de l'entreprise"
                          v-model="fields.entr_resume"
                          prepend-icon="create"
                          name="entDesc"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="text"
                          label="Ville"
                          v-model="fields.entr_city"
                          prepend-icon="location_city"
                          name="entVille"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="number"
                          label="Code Postal"
                          v-model="fields.entr_postalCode"
                          prepend-icon="create"
                          name="entCodePost"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="text"
                          label="Zone d'activité"
                          v-model="fields.entr_actArea"
                          prepend-icon="create"
                          name="entZA"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="text"
                          label="Rue"
                          v-model="fields.entr_street"
                          prepend-icon="create"
                          name="entStreet"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="number"
                          label="Numéro de rue"
                          v-model="fields.entr_streetNb"
                          prepend-icon="create"
                          name="entStreetNb"></v-text-field>

            <v-text-field class="col-xs-12"
                          type="text"
                          label="Site web"
                          v-model="fields.entr_webSite"
                          prepend-icon="link"
                          name="entWeb"></v-text-field>

            <v-btn class="col-xs-12" dark flat @click.native="edit()">SUBMIT</v-btn>
        </form>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                fields: {
                    entr_socRea: "",
                    entr_contact: "",
                    entr_phone: "",
                    entr_mail: "",
                    entr_crea: "",
                    entr_nbEmp: "",
                    entr_resume: "",
                    entr_city: "",
                    entr_postalCode: "",
                    entr_actArea: "",
                    entr_street: "",
                    entr_streetNb: "",
                    entr_webSite: "",
                },

                menu: "",
            }
        },
        methods:
        {
            edit() {
                let data = {};
                let id = sessionStorage.getItem("SJidProfil");

                for(let field in this.fields)
                {
                    if(this.fields[field] != "")
                        data[field] = this.fields[field];
                }

                this.$http.put('/back/api/societies/'+sessionStorage.getItem("SJuid"), data, {headers: {'x-access-token': sessionStorage.getItem('SJtoken')}}).then(response =>
                {
                    if(response.body.success)
                        console.log("UPDATE SUCCESSFULL");
                }, response =>
                {
                    console.log("ISSUES DURING UPDATE");
                });

            }
        }
    }

</script>

<style>

</style>