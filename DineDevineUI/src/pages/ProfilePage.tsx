import React, {useCallback, useEffect, useState} from 'react';
import {
    IonAvatar,
    IonBackButton,
    IonButton, IonButtons, IonCard, IonChip, IonCol,
    IonContent, IonGrid,
    IonHeader, IonImg, IonItem, IonList,
    IonPage, IonPopover, IonRow, IonSelect, IonSelectOption, IonText,
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
    const [personalityType, setPersonalityType] = useState<string>(localStorage.getItem("personality") ?? "INFP")
    const [photo, setPhoto] = useState(localStorage.getItem("photo") ?? "")

    function getAvatar() {
        if (photo == "") {
            return "/public/test.png"
        }
        return photo

    }

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
            <IonHeader className={"profileHeader"}>
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
            <IonContent fullscreen class={"profileContainer"}>
                <IonGrid class={"ion-margin-top"}>
                    <IonRow class={"ion-margin-top ion-margin-bottom"}>
                        <IonCol className={"avatarContainer"}>
                            <IonAvatar class={"avatar ion-margin-end"}>
                                <img className={"image"}  src={getAvatar()}/>
                            </IonAvatar>
                        </IonCol>

                        <IonCol class={"ion-margin-start"}>
                            <h1 className="no-text-wrap profileHeadline">{name}</h1>
                            {email}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <h1 className={"ion-margin-start profileHeadline"}>Personality </h1>
                                <p className={"ion-margin-start persoLabel"}>Personality Type: </p><IonSelect className={"ion-margin-start persoSelect"} aria-label={personalityType} placeholder={personalityType}  onIonChange={(e) => changePersonality(e)} >
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
                    <IonRow>
                        <IonCol>
                            <IonCard className="achievements-card">
                                <h1 className="ion-margin-start profileHeadline">Achievements</h1>
                                <IonRow>
                                    <IonCol className="ion-col"> {/* Use "ion-col" class here */}
                                        <IonImg
                                            src="./public/img/black-ribbon.png"
                                            alt="Description for the black ribbon"
                                        ></IonImg>
                                        <IonText>Went out with everyone in the building</IonText>
                                    </IonCol>
                                    <IonCol className="ion-col"> {/* Use "ion-col" class here */}
                                        <IonImg
                                            src="./public/img/green-ribbon.png"
                                            alt="Description for the green ribbon"
                                        ></IonImg>
                                        <IonText>Ate at 3 restaurants</IonText>
                                    </IonCol>
                                    <IonCol className="ion-col"> {/* Use "ion-col" class here */}
                                        <IonImg
                                            src="./public/img/orange-ribbon.png"
                                            alt="Description for the orange ribbon"
                                        ></IonImg>
                                        <IonText>Ate vegan</IonText>
                                    </IonCol>
                                    <IonCol className="ion-col"> {/* Use "ion-col" class here */}
                                        <IonImg
                                            src="./public/img/empty.png"
                                            alt="Description for the empty image"
                                        ></IonImg>
                                        <IonText>
                                            Most liked
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
