import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const ProfileServiceDetailScreen = ({ route, navigation }) => {
    const theme = React.useContext(ThemeContext);
    const { service } = route.params;

    const handleEdit = () => {
        navigation.navigate('EditService', {
            service: {
                ...service,
                gallery: service.gallery || []  // Ensure gallery is an array
            }
        });
    };

    const handleDelete = () => {
        // Implement the delete functionality
        navigation.goBack();
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Service Details</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={handleEdit}>
                        <Ionicons name="pencil-outline" size={24} color={theme.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Ionicons name="trash-outline" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.text }]}>{service.title}</Text>
                <Text style={[styles.text, { color: theme.secondaryText }]}>{service.description}</Text>
                {/* Add more details as needed */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60,
    },
    card: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default ProfileServiceDetailScreen;
