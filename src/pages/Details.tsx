import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const api = () =>{
  return process.env.REACT_APP_API_ENDPOINT;
}

console.log(api);

const Details: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Details</p>
      </IonContent>
    </IonPage>
  );
};

export default Details;
