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
} from '@ionic/react';
import "./ProfilePage.css"

const enum interests {
    Hiking,
    Painting,
    Football,
    Basketball,
    Tennis
}

const enum dislikes {
    Hiking,
    Painting,
    Football,
    Basketball,
    Tennis
}

export interface Profile {
    id: string // the user id
}

const enum PERONALITY_TYPES{
    INFP,
    ENFP,
    INFJ,
    ENFJ,
    INTJ,
    ENTJ,
    INTP,
    ENTP,
    ISFP,
    ESFP,
    ISTP,
    ESTP,
    ISFJ,
    ESFJ,
    ISTJ,
    ESTJ
}

const ProfilePage: React.FC<Profile> = (props: Profile) => {
    const [interestsTAG, setInterestTags] = useState<Array<string>>(JSON.parse(localStorage.getItem("interests")?? "[]") ?? [])
    const [dislikeTAG, setDislikeTags] = useState<Array<string>>(JSON.parse(localStorage.getItem("dislikes")?? "[]") ?? [])
    const [name, setName] = useState(localStorage.getItem("name"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [personalityType, setPersonalityType] = useState<string>(localStorage.getItem("personality") ?? "Default")

    useEffect(() => {
        localStorage.setItem('interests', JSON.stringify(interestsTAG));
        localStorage.setItem('dislikes', JSON.stringify(dislikeTAG));
        localStorage.setItem('personality', personalityType)
    }, [interestsTAG, dislikeTAG, personalityType]);

    const changePersonality = useCallback((e : React.MouseEvent<HTMLIonItemElement>) => {
        console.log("TRIGGERED")
        const new_personality = e.detail.value


        setPersonalityType(new_personality)
    }, [personalityType])

    const addInterest = useCallback((e : React.MouseEvent<HTMLIonItemElement>) => {
        const interest = e.target.innerText

        if(interest == "+"){
            return
        }

        console.log(interest)
        const newInterests = [...interestsTAG, interest];
        setInterestTags(newInterests);
        console.log("update: " + interests)
    }, [interestsTAG])

    const addDislike = useCallback((e : React.MouseEvent<HTMLIonItemElement>) => {
        const dislike = e.target.innerText

        if(dislike == "+"){
            return
        }

        console.log(dislike)
        const newDislike = [...dislikeTAG, dislike];
        setDislikeTags(newDislike);
        console.log("update: " + dislikes)
    }, [dislikeTAG])

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
                <IonGrid class={"ion-margin-top"}>
                    <IonRow class={"ion-margin-top ion-margin-bottom"}>
                        <IonCol className={"avatarContainer"}>
                            <IonAvatar class={"avatar ion-margin-end"}>
                                <img className={"image"}  src={"/public/test.png"}/>
                            </IonAvatar>
                        </IonCol>

                        <IonCol class={"ion-margin-start"}>
                            <h1 className="no-text-wrap profileHeadline">{name}</h1>
                            E-Mail: {email}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <h1 className={"ion-margin-start profileHeadline"}>Personality</h1>
                                <IonSelect className={"ion-margin-start persoSelect"} label={"Personality Type:"} placeholder={personalityType} onIonChange={(e) => changePersonality(e)} >
                                    {Object.keys(PERONALITY_TYPES).filter((v) => isNaN(Number(v)) ).map((tag, idx) => <IonSelectOption key={tag+idx} id={"button" + tag}>{tag}</IonSelectOption>)}
                                </IonSelect>
                                <div className={"ion-margin-start"}>
                                    You dont know your personality Type yet? <IonButton>TAKE THE PERSONALITY TEST</IonButton>
                                </div>

                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <h1 className={"ion-margin-start profileHeadline"}>Interests</h1>
                                <div className={"ion-margin-start ion-margin-bottom"}>
                                    {interestsTAG.map((tag, idx) => <IonChip key={tag+idx} >{tag}</IonChip>)}
                                    <IonChip id={"popover-button"} onClick={(e) => addInterest(e)}>+</IonChip>
                                    <IonPopover trigger="popover-button" dismissOnSelect={true}>
                                        <IonContent>
                                            <IonList>
                                                {Object.keys(interests).filter((v) => isNaN(Number(v)) && !interestsTAG.includes(v)).map((tag, idx) => <IonItem key={tag+idx} button={true} onClick={(e) => addInterest(e)} id={"button" + tag} detail={false}>{tag}</IonItem>)}
                                            </IonList>
                                        </IonContent>
                                    </IonPopover>
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <h1 className={"ion-margin-start profileHeadline"}>Dislikes</h1>
                                <div className={"ion-margin-start ion-margin-bottom"}>
                                    {dislikeTAG.map((tag, idx) => <IonChip key={tag+idx} >{tag}</IonChip>)}
                                    <IonChip id={"popover-button-dislike"} onClick={(e) => addDislike(e)}>+</IonChip>
                                    <IonPopover trigger="popover-button-dislike" dismissOnSelect={true}>
                                        <IonContent>
                                            <IonList>
                                                {Object.keys(dislikes).filter((v) => isNaN(Number(v)) && !dislikeTAG.includes(v)).map((tag, idx) => <IonItem key={tag+idx} button={true} onClick={(e) => addDislike(e)} id={"button" + tag} detail={false}>{tag}</IonItem>)}
                                            </IonList>
                                        </IonContent>
                                    </IonPopover>
                                </div>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
