import React, {useState} from 'react';
import {
    IonAvatar,
    IonBackButton,
    IonButton, IonButtons, IonCard, IonChip, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonPage, IonRow,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './ProfilePage.css';

const enum interests {
    hiking,
    painting,
    football,
    basketball,
    tennis,

}

export interface Profile {
    id: string // the user id
}

const ProfilePage: React.FC<Profile> = (props: Profile) => {
    const [interestsTAG, setInterestTags] = useState([])
    const test = ["TestA", "TestB", "TestC"]
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"></IonBackButton>
                    </IonButtons>

                    <IonTitle className={'center-title'}>Profile</IonTitle>

                    <IonButtons className={"invisible"} slot="end">
                        <IonBackButton defaultHref="/"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow >
                        <IonCol class={"avatarContainer"}>
                            <IonAvatar class={"avatar"}>
                                <img className={"image"}  src={"/public/test.png"}/>
                            </IonAvatar>
                        </IonCol>

                        <IonCol class={"ion-margin-start"}>
                            <h1 className="no-text-wrap">//TODO BACKEND CALL</h1>
                            E-Mail: //TODO BACKEND CALL
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <h1 className={"ion-margin-start"}>Personality</h1>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <h1 className={"ion-margin-start"}>Interests</h1>
                                <div className={"ion-margin-start ion-margin-bottom"}>
                                    {test.map((tag, idx) => <IonChip>{tag}</IonChip>)}
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <h1 className={"ion-margin-start"}>Dislikes</h1>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
