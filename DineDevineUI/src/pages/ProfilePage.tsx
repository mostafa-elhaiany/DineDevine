import React from 'react';
import {
    IonBackButton, IonButton,
    IonButtons,
    IonContent, IonDatetime,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import "./pages.css"

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
                <div className={"container"} >
                    <div>
                        {/*Fill remaining space*/}
                    </div>
                    <div className={"content-container"}>
                        <span>Test</span>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
