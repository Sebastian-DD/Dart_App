<template>
    <ion-page class="ion-justify-content-start">
        <ion-header>
            <ion-toolbar>
                <ion-title>Registered Players</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-button @click="generatePlayer()" expand="block" fill="clear" shape="round">
            Generate Player
        </ion-button>
        <ion-list>
            <ion-item @click="presentAlert('Gunnar')" v-for="(player,i) in players" :key="i">
                <ion-label expand="full">{{player}}</ion-label>
                <ion-button>Game History</ion-button>
                <ion-button>Stats</ion-button>
                <ion-button>Edit</ion-button>
            </ion-item>
        </ion-list>       
        
    </ion-page>
</template>

<script lang="ts" setup>
    import { IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonList, IonLabel, IonItem, alertController } from '@ionic/vue';
    import { ref } from 'vue';

    const players = ref(["Gunnar", "Seppel", "Janek"])
    
    const presentAlert = async (playerName: string) => {
        const alert = await alertController.create({
            header: 'Alert',
            subHeader: 'You selected Player:',
            message: playerName,
            buttons: ['OK'],
        });

        await alert.present();
    };

    const generatePlayer = () => {
        players.value.push("neuer Spieler")
    };
</script>

<style>
    ion-button{
        justify-content: right;
    }
</style>