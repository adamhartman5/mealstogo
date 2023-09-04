import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
	return (
		<>
			<SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
				<View style={styles.search}>
					<Text>search</Text>
				</View>
				<View style={styles.list}>
					<Text>list</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({
	search: {
		padding: 16,
		backgroundColor: 'green',
	},
	list: {
		padding: 16,
		flexGrow: 1,
		backgroundColor: 'blue',
	},
});
