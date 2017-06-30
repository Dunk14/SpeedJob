<template>

    <div>
        <h1>Edit du profil</h1>

        <p>Rentrez et validez les champs que vous souhaitez changer</p>

        <form>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Raison Social"
                          v-model="entRaiSoc"
                          name="entRaiSoc"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Contact de l'entreprise"
                          v-model="entContact"
                          name="entContact"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="number"
                          label="Numéro de téléphone de contact"
                          v-model="entTel"
                          name="entTel"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Email de contact"
                          v-model="entEmail"
                          name="entEmail"></v-text-field>

            <!-- DATE PICKER FIELD -->
            <v-text-field class="col-xs-12"
                          slot="activator"
                          type="date"
                          label="Date de création"
                          prepend-icon="event"
                          readonly
                          v-model="entCre"
                          name="entCrea"></v-text-field>
            <v-date-picker v-model="entCrea" no-title scrollable actions>
                <template scope="{ save, cancel }">
                    <v-card-row actions>
                        <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                        <v-btn flat primary @click.native="save()">Save</v-btn>
                    </v-card-row>
                </template>
            </v-date-picker>

            <v-text-field class="col-xs-12"
                          type="number"
                          label="Nombre d'employés"
                          v-model="entNbEmp"
                          name="entNbEmp"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="textfield"
                          label="Description de l'entreprise"
                          v-model="entDesc"
                          name="entDesc"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Ville"
                          v-model="entVille"
                          name="entVille"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="number"
                          label="Code Postal"
                          v-model="entCodePost"
                          name="entCodePost"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Zone d'activité"
                          v-model="entZA"
                          name="entZA"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Rue"
                          v-model="entStreet"
                          name="entStreet"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="number"
                          label="Numéro de rue"
                          v-model="entStreetNb"
                          name="entStreetNb"></v-text-field>
            <v-text-field class="col-xs-12"
                          type="text"
                          label="Site web"
                          v-model="entWeb"
                          name="entWeb"></v-text-field>
        </form>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                entRaiSoc: "",
                entContact: "",
                entTel: "",
                entEmail: "",
                entCre: "",
                entNbEmp: "",
                entDesc: "",
                entVille: "",
                entCodePost: "",
                entZA: "",
                entStreet: "",
                entStreetNb: "",
                entWeb: "",
            }
        }
    }

</script>

<style>

</style>