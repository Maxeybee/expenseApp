import React,  { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { ListItem } from 'react-native-elements'

import {expenses, addExpense} from '../entity/expenses';

export default function AddExpense (){
    
    const [expenseState, setExpenseState] = useState(expenses)
    const [expenseValue, setExpenseValue] = useState(0);
    const [expenseType, setExpenseType] = useState('');


    
    let allExpense = expenseState
        .map(expense =>
            <ListItem
            key={expense.id}
            title={expense.expense + '€ ' + expense.type}
            bottomDivider
            />
    )
    
    return(
        <View>
            <Text style={styles.text}>
                Ajouter votre dépense €
            </Text>
            <Input
                keyboardType='numeric'
                placeholder='dépense'
                style={styles}
                onChangeText={value => setExpenseValue(value)}
                value={expenseValue}
            />
            <Text style={styles.text}>
                quel type de dépense ?
            </Text>
            <Input
                placeholder='type de dépense'
                style={styles}
                onChangeText={value => setExpenseType(value)}
                value={expenseType}
            />
            <Button 
                onPress={() => expenseState.onSave(lastname)} 
                title='Enregistrer' />
            <Text>
                {allExpense}

                { 'my new expense : ' + expenseValue +' & type : '+expenseType}
            </Text>
        </View>
    )
}

const stylesBtn = StyleSheet.create({
    btn: {
        flex: 1,
        margin: '10px'
    },
  });

const styles = StyleSheet.create({
text: {
    flex: 2,
    margin: '10px'
},
});