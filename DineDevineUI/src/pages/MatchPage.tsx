import React from 'react';
import {
    IonButton, IonButtons,
    IonContent, IonDatetime,
    IonHeader, IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './pages.css'
import { personCircleOutline } from 'ionicons/icons';


const MatchPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton className={"invisible"} fill={"clear"} slot={"start"}>
                        <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircleOutline}/>
                    </IonButton>

                    <IonTitle className={'center-title'}>Match</IonTitle>

                    <IonButton href={"/profile"} fill={"clear"} slot={"end"}>
                        <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircleOutline}/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className={"container"} >
                    <div>
                        {/*Fill remaining space*/}
                    </div>
                    <div className={"content-container"}>
                        <span>Select Time:</span>
                        <IonDatetime locale="de-DE" presentation="time" />
                        <IonButton href={"/select-restaurant"} className={"match-button"} size="large">Match!</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MatchPage;
