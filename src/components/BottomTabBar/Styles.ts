import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        width: '100%',
        backgroundColor: '#222',
        paddingVertical: 5
    },
    itemContainer: {
        width: '20%',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer:{
        borderRadius: 12,
        width: '100%',
        height: 28,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        paddingVertical: 4
    },
    iconContainerFocused:{
        backgroundColor: '#548CFF',
        borderRadius: 12
    }
    
});

export default styles;