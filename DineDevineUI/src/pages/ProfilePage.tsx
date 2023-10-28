import React from 'react';
import {
    IonBackButton,
    IonButton, IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"></IonBackButton>
                    </IonButtons>
                    <IonTitle className={'center-title'}>Profile</IonTitle>
                    <IonButtons slot="end">
                        <IonBackButton className={"invisible"} defaultHref="/"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <p>Test</p>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
