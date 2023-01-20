import React from 'react'
import { Image, Modal, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import { MAIN_COLOR } from '../../constants/styles';

interface IProps {
    modalVisible: boolean,
    setModalVisible(visible: boolean): void;
}

const CreatorModal: React.FC<IProps> = ({modalVisible, setModalVisible}) => {
    const imageUrls = [require('./books.jpg'), require('./food.jpg'), require('./clothes.jpg')];
    const images = imageUrls.map((uri, i) => {
        return {
            id: i.toString(),
            img: <Image key={uri} source={uri} style={styles.image}/>
        }
    });
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(!modalVisible)}}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={[styles.textStyle, styles.closeButtonText]}>x</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.title}>Agregar item</Text>
                        <ScrollView>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.subtitle}>Imagen:</Text>
                                <FlatList 
                                    horizontal={true}
                                    data = {images}
                                    renderItem = {({item}) => item.img}
                                    keyExtractor ={item => item.id}
                                />
                            </View>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.subtitle}>Nombre</Text>
                                <TextInput style={styles.inputBox} defaultValue='' placeholder='...' />
                            </View>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.subtitle}>Descripción</Text>
                                <TextInput style={styles.inputBox} defaultValue='' placeholder='...' multiline = {true} numberOfLines = {2} />
                            </View>
                            <View style={[styles.doubleInput, styles.inputTitleContainer]}>
                                <View style={styles.doubleInputColumn}>
                                    <Text style={styles.subtitle}>Precio</Text>
                                    <TextInput style={[styles.inputBox, styles.priceInput]} defaultValue='0' placeholder='US$' />
                                </View>
                                <View style={styles.doubleInputColumn}>
                                    <Text style={styles.subtitle}>Cantidad</Text>
                                    <TextInput style={styles.inputBox} defaultValue='0' placeholder='0' />
                                </View>
                            </View>
                        </ScrollView>
                        <View  style={styles.buttons}>
                            <TouchableOpacity style={[styles.acceptButton, styles.button]}>
                                <Text style={styles.buttonText}>Añadir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.cancelButton, styles.button]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
    },
    closeButtonText: {
        fontSize: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    inputTitleContainer: {
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 5,
    },
    doubleInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    doubleInputColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    priceInput: {
        width: '85%',
    },
    inputBox: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        padding: 2,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15,
    },
    button: {
        borderRadius: 15,
        padding: 12,
        marginLeft: 15,
        elevation: 2 //TODO: IOS
    },
    acceptButton: {
        backgroundColor: MAIN_COLOR,
    },
    cancelButton: {
        backgroundColor: 'gray',
    },
    buttonText: {
        color: 'white',
        textAlign: "center"
    },
    image: {
        width: 150,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginHorizontal: 15,
        marginVertical: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    },
    textStyle: {
        color: MAIN_COLOR,
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default CreatorModal;