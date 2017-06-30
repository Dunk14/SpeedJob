<style lang="scss" scoped>
    .student {
        font-size: 24px;
    }

    .student__null {
        opacity: 0.6;
    }

    .student__icon, .edit__icon {
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
        <div v-if="student" class="student">
            <div class="col-xs-12">
                <h2><v-icon class="student__icon">account_circle</v-icon> {{student.etud_firstname | capitalize}} {{student.etud_lastname | capitalize}} <v-icon class="edit__icon">mode_edit</v-icon></h2>
            </div>

            <div class="col-xs-12">
                <v-card class="elevation-0">
                    <v-card-text>
                        <span v-if="student.etud_desc">{{student.etud_desc | capitalize}}</span>
                        <span v-else class="student__null">Aucune description</span>
                    </v-card-text>
                </v-card>
            </div>

            <div class="col-xs-12 col-sm-6">
                <v-card class="elevation-0">
                    <v-card-text>
                        <v-icon class="location__icon">location_city</v-icon>
                        <span v-if="student.etud_city">{{student.etud_city | capitalize}}</span>
                        <span v-else class="student__null">Aucune ville</span>
                    </v-card-text>
                </v-card>
            </div>

            <div class="col-xs-12 col-sm-6">
                <v-card class="elevation-0">
                    <v-switch label="En recherche" v-model="searching" disabled></v-switch>
                </v-card>
            </div>

            <div class="col-xs-12">
                <v-card class="elevation-0">
                    <v-card-text>
                        <h4>Expérience:</h4>
                        <span v-if="student.etud_exp">{{student.etud_exp | capitalize}}</span>
                        <span v-else class="student__null">Aucune</span>
                    </v-card-text>
                </v-card>
            </div>

            <div class="col-xs-12">
                <v-card class="elevation-0">
                    <v-card-text>
                        <h4>Compétences:</h4>
                        <span v-if="student.etud_comp">{{student.etud_comp | capitalize}}</span>
                        <span v-else class="student__null">Aucune</span>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                student: null,
                searching: false
            }
        },
        created () {
            this.$http.get('/back/api/students/'+sessionStorage.getItem('SJuid'), {
                headers: {'x-access-token': sessionStorage.getItem('SJtoken')}
            }).then(response =>
            {
                this.student = response.body
                if (this.student.etud_search === 1)
                    this.searching = true
                else
                    this.searching = false

            }, response => {
                console.log("ERROR", response);
            })
        }
    }
</script>