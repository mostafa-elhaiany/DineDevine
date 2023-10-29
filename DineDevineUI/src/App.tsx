import {
    IonApp, IonRouterOutlet,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import "./globals.css"

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MatchPage from "./pages/MatchPage";
import React from "react";
import {Redirect, Route} from "react-router";
import ProfilePage from "./pages/ProfilePage";
import WaitingPage from "./pages/WaitingPage";
import OnboardingPage from "./pages/OnboardingPage";
import SelectRestaurantPage from "./pages/SelectRestaurantPage";
import IcebreakerPage from "./pages/IcebreakerPage";
import QuizPage from "./pages/QuizPage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/onboarding" component={OnboardingPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/match" component={MatchPage} />
            <Route path="/waiting" component={WaitingPage} />
            <Route path="/icebreaker" component={IcebreakerPage} />
            <Route path="/select-restaurant" component={SelectRestaurantPage} />
            <Route path="/quiz" component={QuizPage} />

            <Redirect exact from="/" to="/onboarding" />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
