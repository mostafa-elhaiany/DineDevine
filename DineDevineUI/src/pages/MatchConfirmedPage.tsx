import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const VideoPage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Video Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="ion-padding">
                    <h1>MP4 Video</h1>
                    <video controls>
                        <source src="/public/match-success.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default VideoPage;
