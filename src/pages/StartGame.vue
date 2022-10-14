<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>Game settings</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-button class="startGameButton" @click="startGame" shape="round">
        Start Game
    </ion-button>


</template>

<script lang="ts">
    import { alertController } from '@ionic/vue';

    export default {
        components: {},

        setup() {
            const startGame = async () => {
                const alert = await alertController.create({
                    header: 'Alert',
                    message: 'Game Started',
                    buttons: ['OK'],
                });

                await alert.present();
            };

            return { startGame };
        },
    };
</script>

<style>
    .startGameButton{
        margin: auto 15% auto 15%;
    }
</style>