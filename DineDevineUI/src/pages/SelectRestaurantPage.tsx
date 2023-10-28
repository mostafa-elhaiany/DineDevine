import React, {useState} from 'react';
import {
    IonButton,
    IonContent, IonHeader, IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonReorder,
    IonReorderGroup, IonTitle,
    IonToolbar,
    ItemReorderEventDetail
} from '@ionic/react';

import './SelectRestaurantPage.css';

const MatchPage: React.FC = () => {
    const [restaurants, setRestaurants] = useState([
        "Mensa",
        "Hotel Restaurant Löwen",
        "Gleis 7"
    ])

    function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
        event.detail.complete();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className={'center-title'}>Select Restaurant...</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className={"content-padding"} fullscreen>
                <div className={"grid"}>
                    <div className={"grid-item"}></div>
                    <div className={"grid-item"}></div>
                    <div className={"grid-item"}>
                        <p>Order restaurants from most favourite to least favourite.</p>
                    </div>
                    <div className={"left-right-grid"}>
                        <div className={"left-col"}>
                            <div className={"number-left-container"}>
                                <span className={"number-left"}>1</span>
                            </div>
                            <div className={"number-left-container"}>
                                <span className={"number-left"}>2</span>
                            </div>
                            <div className={"number-left-container"}>
                                <span className={"number-left"}>3</span>
                            </div>
                        </div>
                        <div>
                            <IonList>
                                {/* The reorder gesture is disabled by default, enable it to drag and drop items */}
                                <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
                                    {restaurants.map((restaurant, index) => (
                                        <IonItem>
                                            <IonLabel>{restaurant}</IonLabel>
                                            <IonReorder slot="end"></IonReorder>
                                        </IonItem>
                                    ))}
                                </IonReorderGroup>
                            </IonList>
                        </div>
                    </div>
                    <div className={"grid-item select-restaurant-button-section"}>
                        <IonButton className={"match-button"} size="default">Looks good!</IonButton>
                    </div>
                </div>
            </IonContent>

        </IonPage>
    );
};

export default MatchPage;
