<template>
    <v-app>
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
        >
            <v-list>
                <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        :class="item.class"
                >
                    <v-list-tile value="true" :href="item.href"  ripple>
                        <v-list-tile-action>
                            <v-icon light v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn
                    icon
                    @click.native.stop="miniVariant = !miniVariant"
            >
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <main>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <v-layout>
                        <router-view></router-view>
                    </v-layout>
                </v-slide-y-transition>
            </v-container>
        </main>
        <v-footer :fixed="fixed">
            <span>&copy; SpeedJob - IMIE 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import 'vuetify/src/stylus/main.styl';

    export default {
        /*beforeCreate () {
            if (sessionStorage.getItem('SJlogin') && sessionStorage.getItem('SJtoken')) {
                this.$http.get('/api/api',
                {
                    headers: {'x-access-token': sessionStorage.getItem('SJtoken')}
                }).then(response =>
                {
                    console.log(response)
                }, response => {
                    console.log("ERROR", response)
                })
            } else {
                this.$router.push('/sign-in')
            }
        },*/
        data () {
            return {
                clipped: true,
                drawer: true,
                fixed: false,
                items: [
                    { icon: 'home', title: 'Accueil', href: '#/home', class: "" },
                    { icon: 'perm_identity', title: 'Profil', href: '#/profile', class: "" },
                    { icon: 'power_settings_new', title: 'Déconnexion', href: '#/logOut', class: "bottom"}
                ],
                miniVariant: true,
                right: true,
                rightDrawer: false,
                title: 'SpeedJob'
            }
        }
    }
</script>

<style lang="scss">

    .bottom
    {
        position: absolute;
        bottom:0px;
        width:100%;
    }

</style>