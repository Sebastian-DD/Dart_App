<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Registered Players</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-list>
            <ion-item @click="presentAlert('Gunnar')">
                <ion-label expand="full">Gunnar</ion-label>
                <ion-button>Game History</ion-button>
                <ion-button>Stats</ion-button>
                <ion-button>Edit</ion-button>
            </ion-item>
            <ion-item ref="player1" hidden>
                <ion-input placeholder="Gunnar"></ion-input>
            </ion-item>
            <ion-item @click="presentAlert('Janek')">
                <ion-label expand="full">Janek</ion-label>
                <ion-button>Game History</ion-button>
                <ion-button>Stats</ion-button>
                <ion-button >Edit</ion-button>
            </ion-item>
            <ion-item class="Janek" hidden>
                <ion-input placeholder="Janek"></ion-input>
            </ion-item>
            <ion-item @click="presentAlert('Seppel')">
                <ion-label expand="full">Seppel</ion-label>
                <ion-button>Game History</ion-button>
                <ion-button>Stats</ion-button>
                <ion-button >Edit</ion-button>
            </ion-item>
            <ion-item class="Seppel" hidden>
                <ion-input placeholder="Seppel"></ion-input>
            </ion-item>
        </ion-list>
    </ion-page>
</template>

<script lang="ts" setup>
    import { IonPage, IonHeader, IonToolbar, IonTitle, alertController } from '@ionic/vue';

    const presentAlert = async (playerName: string) => {
        const alert = await alertController.create({
            header: 'Alert',
            subHeader: 'You selected Player:',
            message: playerName,
            buttons: ['OK'],
        });

        await alert.present();
    };
</script>

<style>
    ion-page{
        justify-content: normal;
    }
    ion-button{
        justify-content: right;
    }
</style>