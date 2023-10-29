import React, {useEffect} from 'react';
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
    useEffect(() => {
        setTimeout(() => {
            props.history.push('/icebreaker');
        }, 10000)
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className={'center-title'}>Waiting for match...</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className={"container"} >
                    <div className={"image-container"}>
                        <img alt={"two people meeting"} src={"/waiting.gif"}  />
                    </div>
                    <div className={"content-container"}>
                        <span></span>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default WaitingPage;
