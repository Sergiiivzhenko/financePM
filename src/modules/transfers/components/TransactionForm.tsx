import React from "react";
import {Button, Container, Input, Item, Label, Text} from "native-base";
import {Picker, StyleSheet, View} from "react-native";
import {Colors} from "../../common/constants/Colors";

enum DebtType {
    GiveDebt = 'Give debt',
    GetDebt = 'Get debt',
}

export const TransactionForm = ({
                                    account,
                                    setAccount,
                                    accounts,
                                    amount,
                                    setAmount,
                                    category,
                                    setCategory,
                                    categories,
                                    debt,
                                    setDebt,
                                    description,
                                    setDescription,
                                    actionText,
                                    actionHandler,
                                }) => {
    const onAccountChangeHandler = (account) => setAccount(account);
    const onCategoryChangeHandler = (category) => setCategory(category);
    const onDebtChangeHandler = (debt) => setDebt(debt);
    return (
        <Container style={styles.container}>
            <View style={styles.margin}>
                <View style={[styles.marginBottom, styles.pickerContainer]}>
                    <Label style={styles.padding}>Account</Label>
                    <Picker style={styles.picker} selectedValue={account} onValueChange={onAccountChangeHandler}>
                        {accounts.map(account => (
                            <Picker.Item key={account.name} label={account.name} value={account}/>
                        ))}
                    </Picker>
                </View>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Amount</Label>
                    <Input style={styles.padding} value={amount} onChangeText={setAmount}/>
                </Item>
                {!debt ? (
                    <View style={[styles.marginBottom, styles.pickerContainer]}>
                        <Label style={styles.padding}>Category</Label>
                        <Picker style={styles.picker} selectedValue={category} onValueChange={onCategoryChangeHandler}>
                            {categories.map(category => (
                                <Picker.Item key={category.name} label={category.name} value={category}/>
                            ))}
                        </Picker>
                    </View>
                ) : (
                    <View style={[styles.marginBottom, styles.pickerContainer]}>
                        <Label style={styles.padding}>Debt Type</Label>
                        <Picker style={styles.picker} selectedValue={debt} onValueChange={onDebtChangeHandler}>
                            {Object.keys(DebtType).map(key => (
                                <Picker.Item key={DebtType[key]} label={DebtType[key]} value={DebtType[key]}/>
                            ))}
                        </Picker>
                    </View>
                )}
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Description</Label>
                    <Input style={styles.padding} value={description} onChangeText={setDescription}/>
                </Item>
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