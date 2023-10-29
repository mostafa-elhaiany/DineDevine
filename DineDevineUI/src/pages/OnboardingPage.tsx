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
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {base64FromPath, usePhotoGallery, UserPhoto} from "../hooks/usePhotoGallery";


const OnboardingPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    defineCustomElements(window)
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
    const [photo, setPhoto] = useState(localStorage.getItem('photo') ?? "")
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

    const addImage = async () => {
        console.log("addImage")
        var b64 = await takePhoto()
        console.log("addImage2", b64)
        localStorage.setItem("photo", b64 )
        setPhoto(b64)

    }

    function getAvatar() {
        if (photo == "") {
            return "/public/test.png"
        }
        return photo

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
                            <IonAvatar onClick={async() => await addImage()} className={"image"} class={"avatar"}>
                                <img className={"image"}  src={getAvatar()}/>
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
