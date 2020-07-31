import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../components/Home';
import AddExpense from '../components/AddExpense';

const Routes = () => (
   <Router>
      <Scene key = "root">
          <Scene key = "home" component = {Home} title = "Acceuil" initial = {true} />
          <Scene key = "addexpense" component = {AddExpense} title = "Add Expense"/>
      </Scene>
   </Router>
)
export default Routes