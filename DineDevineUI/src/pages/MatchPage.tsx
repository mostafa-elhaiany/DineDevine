import React, {useEffect, useState} from 'react';
import {
    IonButton, IonButtons, IonModal,
    IonContent, IonDatetime, IonDatetimeButton, IonSelectOption,
    IonHeader, IonIcon, IonSelect,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './pages.css'
import { personCircleOutline, personOutline, timeOutline } from 'ionicons/icons';
import {RouteComponentProps} from "react-router";


const MatchPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [numberOfPeople, setNumberOfPeople] = useState(2)
    const currentDate = `${new Date().getHours() + 1}`.slice(-4) + ":00"
    const [time, setTime] = useState(currentDate)
    const enum interests {
        Hiking,
        Painting,
        Football,
        Basketball,
        Tennis
    }

    useEffect(() => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        
        // Name or E-Mai is not filled out. Go back to onboarding
        if(name == null || email == null){
            props.history.push("/")
        }
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton className={"invisible"} fill={"clear"} slot={"start"}>
                        <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircleOutline}/>
                    </IonButton>

                    <IonTitle className={'center-title'}>Match</IonTitle>

                    <IonButton href={"/profile"} fill={"clear"} slot={"end"}>
                        <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircleOutline}/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className={"container"} >
                    <div className={"video-container"}>
                        {/*Fill remaining space*/}
                        <img className={"video"} src="/match-placeholder-unscreen.gif"></img>
                    </div>
                    <div className={"content-container"}>
                        {/*<span>Select Time:</span>*/}
                        {/*<IonDatetime locale="de-DE" presentation="time" />*/}
                        <IonButton href={"/select-restaurant"} className={"match-button"} size="large">
                            <img height={40} alt={"Find Match"} src={"/FindMatchText.png"} />
                        </IonButton>
                        <div className={"status-bar"}>
                            <div className={"match-additional-info"} >
                                <div className={"people-button"}>
                                    <IonButton  fill={"clear"} slot={"start"}>
                                        <IonIcon ios={personOutline} md={personOutline}/>
                                    </IonButton>
                                    <IonSelect aria-label="2" placeholder="2">
                                        <IonSelectOption value="2">2</IonSelectOption>
                                        <IonSelectOption value="3">3</IonSelectOption>
                                        <IonSelectOption value="4">4</IonSelectOption>
                                        <IonSelectOption value="5">5</IonSelectOption>
                                    </IonSelect>
                                </div>
                                <div className={"people-button"}>
                                    <IonButton fill={"clear"} slot={"start"}>
                                        <IonIcon ios={timeOutline} md={timeOutline}/>
                                        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                                        <IonModal keepContentsMounted={true}>
                                            <IonDatetime presentation="time" id="datetime"></IonDatetime>
                                        </IonModal>
                                    </IonButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MatchPage;
