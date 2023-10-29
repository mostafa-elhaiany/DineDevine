import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';

const IcebreakerPage = ({ match }) => {
    const [questions, setQuestions] = useState([]);

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
                    <IonTitle>Match Questions</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    {questions.map((question, index) => (
                        <IonItem key={index}>
                            <IonLabel>{question}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default IcebreakerPage;
