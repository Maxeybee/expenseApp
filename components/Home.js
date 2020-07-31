import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import AddExpense from '../components/AddExpense';

export default function Home () {
    
    return(
        <View style={styles.buttons}> 
            <Button style={stylesBtn.btn}
                title="Ajouter une dépense"
                onPress={goToAddExpense}
            />      
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '5px'
    },
  });

  const stylesBtn = StyleSheet.create({
    btn: {
        flex: 3,
        margin: '10px'
    },
  });

const goToAddExpense = () => {
    Actions.addexpense();
}