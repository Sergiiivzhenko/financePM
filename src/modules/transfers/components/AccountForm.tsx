import React from "react";
import {Button, Container, Input, Item, Label, Text} from "native-base";
import {Picker, StyleSheet, View} from "react-native";
import {IconsModal} from "./IconsModal";
import {Colors} from "../../common/constants/Colors";

export const AccountForm = ({name, setName, currency, setCurrency, icon, setIcon, currencies, actionText, actionHandler}) => {
    return (
        <Container style={styles.container}>
            <View style={styles.margin}>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Name</Label>
                    <Input style={styles.padding} value={name} onChangeText={setName}/>
                </Item>
                <View style={[styles.marginBottom, styles.pickerContainer]}>
                    <Label style={styles.padding}>Currency</Label>
                    <Picker style={styles.picker} selectedValue={currency} onValueChange={setCurrency}>
                        {currencies.map(currency => (
                            <Picker.Item key={currency.name} label={currency.name} value={currency} />
                        ))}
                    </Picker>
                </View>
                <View style={[styles.marginBottom, styles.pickerContainer]}>
                    <Label style={styles.padding}>Icon</Label>
                    <IconsModal icon={icon} setIcon={setIcon} />
                </View>
            </View>
            <Button
                style={[styles.button, styles.margin]}
                onPress={actionHandler}
            >
                <Text>{actionText}</Text>
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        marginLeft: 20,
        paddingVertical: 30,
        backgroundColor: Colors.blue,
    },
    marginBottom: {
        marginBottom: 10,
    },
    margin: {
        marginHorizontal: 15,
    },
    padding: {
        paddingHorizontal: 20,
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    picker: {
        flex: 0.5,
    },
});