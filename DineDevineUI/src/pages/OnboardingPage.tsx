import React, {useEffect, useState} from 'react';
import {
    IonButton, IonButtons,
    IonContent, IonDatetime,
    IonHeader, IonIcon, IonInput, IonItem,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './pages.css'
import { personCircleOutline, personOutline, timeOutline } from 'ionicons/icons';
import {RouteComponentProps} from "react-router";


const OnboardingPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    useEffect(() => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');

        // Name and E-Mail is already filled out. Skip onboarding section
        if(name && email){
            props.history.push("/match")
        }
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const onSubmit = (e) => {
        console.log("Save: " + name)
        console.log("Save: " + email)

        if(name && email){
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            props.history.push("/match")
        }
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
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className={"container"}>
                    <div></div>
                    <div className={"content-container"}>
                        <IonItem>
                            <IonInput onIonInput={(event) => updateEmail(event)} value={email} label="Email input" type="email" placeholder="email@domain.com"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput onIonInput={(event) => updateName(event)} value={name} label="Name input" placeholder="Enter your name"></IonInput>
                        </IonItem>
                        <IonButton onClick={onSubmit} type="submit">Submit</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default OnboardingPage;
