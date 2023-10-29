import React, { useEffect, useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButton, IonIcon
} from '@ionic/react';
import './pages.css'
import {personCircleOutline} from "ionicons/icons";

const IcebreakerPage = ({ match }) => {
    const [questions, setQuestions] = useState(
        ["If you could invite any famous person to join us for lunch, who would it be and why?",
        "Describe yourself with 3 words",
        "What animal?"]);


    useEffect(() => {
        const id1 = match.params.id1;
        const id2 = match.params.id2;

        // Make a GET request to the API with the provided IDs
        fetch(`/matches/icebreaker/${id1}/${id2}`)
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data.questions); // Assuming the API response is an object with a "questions" property
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [match.params.id1, match.params.id2]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className={'center-title'}>Icebreakers</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    {questions.map((question, index) => (
                        <IonItem key={index}>
                            <IonLabel className={"wrap-text"} >{question}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default IcebreakerPage;
