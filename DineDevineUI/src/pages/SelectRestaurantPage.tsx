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
import "./pages.css"
import {RouteComponentProps} from "react-router";

const MatchPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [restaurants, setRestaurants] = useState([
        "Mensa",
        "Hotel Restaurant Löwen",
        "Gleis 7"
    ])

    function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
        event.detail.complete();
    }

    async function onSelectRestaurantClicked() {
        const id = localStorage.getItem("ID")
        if(!id){
            console.log("NO ID!")
            return;
        }

        const response = await fetch(BACKEND_URL + `/match/${id}`, {
            method: "POST",
            body: JSON.stringify({
                time: "abc"
            }),
        });

        if(response.status == 200){
            const json = await response.json();
            props.history.push("/waiting")
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className={'center-title'}>Select Restaurant</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className={"container"}>
                    <div></div>
                    <div className={"content-container"}>
                        <div>
                            <h2>Your Preference</h2>
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
                                                <IonReorder slot="end" />
                                            </IonItem>
                                        ))}
                                    </IonReorderGroup>
                                </IonList>
                            </div>
                        </div>
                        <div className={"select-restaurant-button-section"}>
                            <IonButton onClick={onSelectRestaurantClicked} href={"/waiting"} className={"select-restaurant-button"} size="default">Looks good!</IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>

        </IonPage>
    );
};

export default MatchPage;
