import React, { useContext, useRef } from 'react'
import { Modal, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ItemContextComponents } from '../../../../context';
import getUniqueId from '../../../../helpers/idProvider';
import DtItem from '../../../../interfaces/item';
import ImageSlider from '../imageSlider/imageSlider';
import styles from './creatorModal.styles';

interface IProps {
    modalVisible: boolean,
    setModalVisible(visible: boolean): void;
    currencySymbol: string;
    modalTitle: string;
    acceptModalButtonTitle: string;
    cancelModalButtonTitle: string;
}

const CreatorModal: React.FC<IProps> = ({
            modalVisible, 
            currencySymbol,
            setModalVisible, 
            modalTitle,
            acceptModalButtonTitle,
            cancelModalButtonTitle
        }) => {
        
    const { ItemContext } = ItemContextComponents;
    const { addItem } = useContext(ItemContext);
    
    const titleRef = useRef<string>('');
    const descriptionRef = useRef<string>('');
    const priceDollarsRef = useRef<string>('');
    const amountRef = useRef<string>('');
    const imageURLRef = useRef<string>('');
    
    const MAX_TITLE_LENGTH = 20;
    const MAX_DESCRIPTION_LENGTH = 100;
    const MAX_PRICE_LENGTH = 10;
    const MAX_AMOUNT_LENGTH = 2;
    
    const sanitizeInputs = (): DtItem => {
        let title = titleRef.current.trim();
        let priceDollars: string | number = priceDollarsRef.current.trim().split(' ')[0];
        let amount: string | number = amountRef.current.trim();

        if (!title.length) title = 'Item';
        if (!priceDollars.length) priceDollars = 0;
        priceDollars = +priceDollars;
        if (Number.isNaN(priceDollars)) priceDollars = 0;
        if (!amount.length) amount = 1;
        amount = +amount;
        if (Number.isNaN(amount)) amount = 1;

        return {
            id: getUniqueId(),
            title: title,
            description: descriptionRef.current,
            priceDollars: priceDollars,
            amount: amount,
            imageURL: imageURLRef.current,
        }
    }

    const cleanRefs = () => {
        titleRef.current = '';
        descriptionRef.current = '';
        priceDollarsRef.current = '';
        amountRef.current = '';
        imageURLRef.current = '';
    }

    const handleCreateItem = () => {
        const item = sanitizeInputs();
        setModalVisible(!modalVisible);
        cleanRefs();
        addItem(item);
    }

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
                        <Text style={styles.title}>{modalTitle}</Text>
                        <ScrollView>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.subtitle}>Imagen:</Text>
                                <ImageSlider imageUrlRef={imageURLRef} />
                            </View>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.subtitle}>Nombre:</Text>
                                <TextInput 
                                    style={styles.inputBox}
                                    defaultValue=''
                                    placeholder='...' 
                                    onChange={e => titleRef.current = e.nativeEvent.text}
                                    maxLength={MAX_TITLE_LENGTH}
                                    keyboardType='default'
                                />
                            </View>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.subtitle}>Descripción:</Text>
                                <TextInput
                                    style={styles.inputBox}
                                    defaultValue=''
                                    placeholder='...'
                                    multiline = {true}
                                    numberOfLines = {2}
                                    onChange={e => descriptionRef.current = e.nativeEvent.text}
                                    maxLength={MAX_DESCRIPTION_LENGTH}
                                />
                            </View>
                            <View style={[styles.doubleInput, styles.inputTitleContainer]}>
                                <View style={styles.doubleInputColumn}>
                                    <Text style={styles.subtitle}>Precio</Text>
                                    <TextInput
                                        style={[styles.inputBox, styles.priceInput]} 
                                        placeholder={currencySymbol} 
                                        onChange={e => priceDollarsRef.current = e.nativeEvent.text}
                                        maxLength={MAX_PRICE_LENGTH}
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View style={styles.doubleInputColumn}>
                                    <Text style={styles.subtitle}>Cantidad</Text>
                                    <TextInput 
                                        style={styles.inputBox}
                                        defaultValue='1'
                                        placeholder='1' 
                                        onChange={e => amountRef.current = e.nativeEvent.text}
                                        maxLength={MAX_AMOUNT_LENGTH}
                                        keyboardType='numeric'
                                    />
                                </View>
                            </View>
                        </ScrollView>
                        <View  style={styles.buttons}>
                            <TouchableOpacity style={[styles.acceptButton, styles.button]} onPress={handleCreateItem}>
                                <Text style={styles.buttonText}>{acceptModalButtonTitle}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.cancelButton, styles.button]} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.buttonText}>{cancelModalButtonTitle}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
  )
}

export default CreatorModal;