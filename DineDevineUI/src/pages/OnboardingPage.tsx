import React, {useCallback, useEffect, useState} from 'react';
import {
    IonAvatar,
    IonBackButton,
    IonButton, IonButtons, IonCard, IonChip, IonCol,
    IonContent, IonGrid,
    IonHeader, IonItem, IonList,
    IonPage, IonPopover, IonRow, IonSelect, IonSelectOption,
    IonTitle,
    IonToolbar,
    IonInput,
} from '@ionic/react';
import "./ProfilePage.css"

const OnboardingPage: React.FC<Profile> = (props: Profile) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (e) => {
        console.log("Save: " + name)
        console.log("Save: " + email)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updateName = (e) => {
        setName(e.target.value)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className={'center-title'}>Onboarding</IonTitle>
                    <IonButtons className={"invisible"} slot="end">
                        <IonBackButton defaultHref="/"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonItem>
                    <IonInput onIonInput={(event) => updateEmail(event)} value={email} label="Email input" type="email" placeholder="email@domain.com"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput onIonInput={(event) => updateName(event)} value={name} label="Name input" placeholder="Enter your name"></IonInput>
                </IonItem>
                <IonButton onClick={onSubmit} type="submit">Submit</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default OnboardingPage;
