import React, {useEffect, useState} from 'react';
import { camera, trash, close } from 'ionicons/icons';
import {
    IonAvatar,
    IonButton,
    IonContent,
    IonHeader, IonInput, IonItem,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './pages.css'
import {RouteComponentProps} from "react-router";
import {usePhotoGallery} from "../hooks/usePhotoGallery";
import { defineCustomElements } from '@ionic/pwa-elements/loader';


const OnboardingPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    defineCustomElements(window);
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
    const { photos, takePhoto } = usePhotoGallery();

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

    const addImage = async (e) => {
        console.log("addImage")
        await takePhoto()
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
                        <div>
                            <IonAvatar onClick={(e) => addImage(e)} className={"image"} class={"avatar"}>
                                <img className={"image"}  src={"/test.png"}/>
                            </IonAvatar>
                        </div>
                        <IonItem>
                            <IonInput onIonInput={(event) => updateEmail(event)} value={email} label="Email input" type="email" placeholder="email@domain.com"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput onIonInput={(event) => updateName(event)} value={name} label="Name input" placeholder="Enter your name"></IonInput>
                        </IonItem>
                        <IonButton onClick={onSubmit} type="submit">Submit</IonButton>
                        <div className={"bottom-spacer"}/>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default OnboardingPage;
