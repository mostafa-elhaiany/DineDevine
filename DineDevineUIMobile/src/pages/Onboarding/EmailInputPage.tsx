import React, { useState } from 'react';
import {IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow, IonTitle} from '@ionic/react';
import { withRouter, RouteComponentProps } from 'react-router';
import Lottie from "lottie-react";
import emailinputLottie from "../../assets/lotties/email-input.json";

const OnboardingNamePage: React.FC<RouteComponentProps> = ({ history }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleContinue = () => {
        // Handle navigation to the InterestSelectionPage
        history.push('/interest-input');
    };

    return (
        <IonPage className="page-content">
            <IonContent>
                <IonTitle className="page-title">Personal Information</IonTitle>
                <Lottie className="lottie-animation" animationData={emailinputLottie} />

                <IonInput
                    placeholder="Email"
                    value={firstName}
                    onIonChange={(e) => setFirstName(e.detail.value!)}
                />

                <IonButton className="rounded-button" expand="full" shape="round" onClick={handleContinue}>
                    Continue
                </IonButton>
            </IonContent>
        </IonPage>

    );
};

export default withRouter(OnboardingNamePage);
