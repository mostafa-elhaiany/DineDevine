import React from 'react';
import {
    IonButton, IonButtons,
    IonContent, IonDatetime,
    IonHeader, IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import {RouteComponentProps} from "react-router";


const WaitingPage: React.FC<RouteComponentProps> = (props, context) => {

    // TODO:
    // Add animation / info graphic from Heidi
    // 1. Show waiting screen
    // 2. Pool match status
    // 3. if match found -> swap video
    // 4. play video until finished -> change route to SelectRestaurant
    setTimeout(() => {
        props.history.push('/select-restaurant');
    }, 2000)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className={'center-title'}>Waiting for match...</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={"grid"}>
                    <div className={"grid-item"}></div>
                    <div className={"grid-item"}></div>
                    <div className={"grid-item"}>
                    </div>
                    <div className={"match-button-section"}>
                    </div>
                    <div className={"grid-item"}></div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default WaitingPage;
