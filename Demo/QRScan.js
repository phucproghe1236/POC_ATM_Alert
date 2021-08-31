import React from 'react'
import { Linking, Text, View , TouchableOpacity, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

ifScaned = e =>{
    Linking.openURL(e.data).catch(error =>
        Alert.alert("Invalid QRCode",e.data));
}

const QRScan = () => {
    return (
        <QRCodeScanner
            onRead={this.ifScaned}
            reactivate={true}
            permissionDialogMessage={"Need Permission To Access Camera"}
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={{borderColor:"#fff", borderRadius:12}}
            bottomContent={
                <TouchableOpacity>
                    <Text style = {{fontSize:21, color:"#eeeecc"}}>Scan QRCode</Text>
                </TouchableOpacity>
            }/>
    )
}

export default QRScan


