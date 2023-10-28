import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './Tab1.css';
import Spline from '@splinetool/react-spline';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* Display the Spline scene here */}
                <div>
                    <Spline scene="https://prod.spline.design/D3fs8iE9D8i5v2sx/scene.splinecode" />
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Tab1;
