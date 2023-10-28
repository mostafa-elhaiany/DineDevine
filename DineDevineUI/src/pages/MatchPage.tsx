import React from 'react';
import {
    IonButton, IonButtons,
    IonContent, IonDatetime,
    IonHeader, IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './MatchPage.css';
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
            <IonContent fullscreen>
                <div className={"height-full"}>
                    <div className={"grid"}>
                        <div className={"grid-item"}>Select Time:</div>
                        <div className={"grid-item"}>
                            <IonDatetime locale="de-DE" presentation="time" />
                        </div>
                        <div className={"match-button-section"}>
                            <IonButton href={"/waiting"} className={"match-button"} size="large">Match!</IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MatchPage;
