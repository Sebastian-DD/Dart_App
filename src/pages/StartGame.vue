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

<script lang="ts" setup>
    import { alertController } from '@ionic/vue';

    const startGame = async () => {
        const alert = await alertController.create({
            header: 'Alert',
            message: 'Game Started',
            buttons: ['OK'],
        });

        await alert.present();
    };
    
</script>

<style>
    .startGameButton{
        width: 70%;
        margin: 1rem 15% auto 15%;
    }
</style>