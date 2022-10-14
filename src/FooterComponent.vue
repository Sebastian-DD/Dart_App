<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="start" href="/start">
            <ion-icon :icon="triangle" />
            <ion-label>Game Settings</ion-label>
          </ion-tab-button>
            
          <ion-tab-button tab="players" href="/players">
            <ion-icon :icon="ellipse" />
            <ion-label>Players</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { ellipse, triangle } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'TabsFooter',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    setup() {
      return {
        ellipse, 
        triangle,
      }
    }
  });
  </script>
  