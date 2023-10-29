// ChipsListPage.tsx

import {
    IonContent,
    IonPage,
    IonChip,
    IonLabel,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
} from '@ionic/react';
import React from 'react';

interface ChipsListPageProps {
    data: string[];
}

const ChipsListPage: React.FC<ChipsListPageProps> = ({ data }) => {
    const title = data[0];
    const chips = data.slice(1);

    return (
        <IonPage>

            <IonContent className="page-content">
                <IonTitle>
                    {title}
                </IonTitle>
                <IonList>
                    {chips.map((chip, index) => (
                        <IonChip key={index}>
                            <IonLabel>{chip}</IonLabel>
                        </IonChip>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ChipsListPage;
