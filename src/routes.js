import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import RegistrationPage from './components/account/RegistrationPage';
import LoginPage from './components/account/LoginPage';
import VolunteerPage from './components/volunteer/VolunteerPage';
import TrainingPage from './components/training/TrainingPage';
import DonatePage  from './components/donate/DonatePage';
import PartnerPage from './components/partner/PartnerPage';
import ServicesPage from './components/services/ServicesPage'
import TechnicalTrainingPage from './components/training/TechnicalTrainingPage';
import AdministrativeTrainingPage from './components/training/TechnicalTrainingPage';
import GedPage from  './components/training/GedPage';
import GeneralTraining from './components/training/GeneralTrainingPage';
import MoneyPage from './components/donate/MoneyPage';
import ItemsPage from './components/donate/ItemsPage';
import MedicalPage from './components/services/MedicalPage'
import CounsellingPage from './components/services/CounsellingPage';
import LegalPage from './components/services/LegalPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="registration" component={RegistrationPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logoff" component={LoginPage}/>
    <Route path="volunteer" component={VolunteerPage}/>
    <Route path="training" component={TrainingPage}/>
    <Route path="donate" component={DonatePage}/>
    <Route path="partner" component={PartnerPage}/>
    <Route path="services" component={ServicesPage}/>
    <Route path="technicaltraining" component={TechnicalTrainingPage}/>
    <Route path="administrativetraining" component={AdministrativeTrainingPage}/>
    <Route path="gedpage" component={GedPage} />
    <Route path="generaltraining" component={GeneralTraining } />
    <Route path="money" component={MoneyPage} />
    <Route path="items" component={ItemsPage} />
    <Route path="medical" component={MedicalPage} />
    <Route path="counselling" component={CounsellingPage} />
    <Route path="legal" component={LegalPage} />
  </Route>
);
