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

const ProfilePage: React.FC<Profile> = (props: Profile) => {
    const [interestsTAG, setInterestTags] = useState<Array<string>>(JSON.parse(localStorage.getItem("interests")?? "[]") ?? [])
    const [dislikeTAG, setDislikeTags] = useState<Array<string>>(JSON.parse(localStorage.getItem("dislikes")?? "[]") ?? [])

    useEffect(() => {
        localStorage.setItem('interests', JSON.stringify(interestsTAG));
        localStorage.setItem('dislikes', JSON.stringify(dislikeTAG));
    }, [interestsTAG, dislikeTAG]);

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
                <IonGrid>
                    <IonRow>
                        <IonCol className={"avatarContainer"}>
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
                                <h1 className={"ion-margin-start"}>Dislikes</h1>
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
                                <h1 className="ion-margin-start">Achievements</h1>
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
