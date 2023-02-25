// Dépendance
import { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

export default function App() {
	const [bulbState, setBulbState] = useState(true);

	return (
		<View style={styles.container}>
			{bulbState ? (
				<Image
					source={require('./assets/images/bulb_on.png')}
					style={{ width: '100%', height: '90%' }}
				/>
			) : (
				<Image
					source={require('./assets/images/bulb_off.png')}
					style={{ width: '100%', height: '90%' }}
				/>
			)}

			<Button
				title={bulbState ? 'Éteindre' : 'Allumer'}
				color='#122a2e'
				onPress={() => setBulbState(!bulbState)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
