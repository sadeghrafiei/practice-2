import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

function StoryItem({ image, title }) {
	return (
		<View style={styles.sectionContainer}>
			<View style={styles.sectionImageBorder}>
				<Image
					style={styles.sectionImage}
					source={image}
				/>
			</View>
			<Text style={styles.sectionTitle}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		width: 'auto',
		height: 170,
		backgroundColor: '#f5f5f5',
		flexDirection: 'column',
		alignItems: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	sectionImage: {
		width: 80,
		height: 80,
		borderRadius: 80,
	},
	sectionImageBorder: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 90,
		height: 90,
		margin: 10,
		marginTop: 0,
		borderRadius: 80,
		borderWidth: StyleSheet.hairlineWidth,
		borderWidth: 3,
		borderColor: '#bdbdbd',
	},
	sectionTitle: {
		fontSize: 13,
		color: '#2f2f2f'
	}
});


export default StoryItem