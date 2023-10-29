import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChipsListPage from './ChipsListPage';
import './NameInputPage.css';

const InterestInputPage: React.FC = () => {
    return (
        <IonPage className="page-content">
            <IonContent className="page-content">
                <h1>Hello, World!</h1>
            </IonContent>
        </IonPage>
    );
};

export default InterestInputPage;
