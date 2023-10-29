import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonInput,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonTitle,
    IonText,
    IonCard, IonCardContent
} from '@ionic/react';
import { withRouter, RouteComponentProps } from 'react-router';
import nameinputLottie from "../../assets/lotties/name-input.json";
import Lottie from 'lottie-react';
import './NameInputPage.css';

const NameInputPage: React.FC<RouteComponentProps> = ({ history }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleContinue = () => {
        // Handle navigation to the EmailInputPage
        history.push('/email-input');
    };

    return (
        <IonPage className="page-content">
            <IonContent>
                <IonTitle className="page-title">Personal Information
                </IonTitle>

                <IonRow> {/* Lottie Animation*/}
                    <IonCard className="lottie-card">
                        <IonCardContent>
                            <IonRow >
                                {/* Column for the Lottie animation */}
                                <IonCol>
                                    <Lottie className="lottie-animation" animationData={nameinputLottie} />
                                </IonCol>

                                <IonCol>
                                    {/* Column for the text */}
                                    <IonCol className="lottie-text-container">
                                        <IonText className="centered-text">We want to get to know you</IonText>
                                    </IonCol>
                                    <IonCol>
                                        <IonText className="description-text">
                                            We want to get to know our employees better and would love to connect you with other coworkers
                                        </IonText>
                                    </IonCol>
                                </IonCol>

                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                </IonRow>


                <IonInput
                    placeholder="First Name"
                    value={firstName}
                    onIonChange={(e) => setFirstName(e.detail.value!)}
                />
                <IonInput
                    placeholder="Last Name"
                    value={lastName}
                    onIonChange={(e) => setLastName(e.detail.value!)}
                />

                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            {/* Empty column to occupy space */}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <IonButton className="rounded-button" expand="full" shape="round" onClick={handleContinue}>
                                Continue
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(NameInputPage);
