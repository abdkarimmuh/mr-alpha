import Colors from '@app/assets/colors';
import { Text } from '@app/components';
import React, { PureComponent } from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = {
	labels: [
		'Beji',
		'Bojongsari',
		'Cilodong',
		'Cimanggis',
		'Cinere',
		'Cipayung',
		'Limo',
		'Pan. Mas',
		'Sawangan',
		'Sukmajaya',
		'Tapos',
	],
	datasets: [
		{
			data: [
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
			],
			strokeWidth: 1,
			color: () => Colors.primaryColor,
		},
		{
			data: [
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
			],
			strokeWidth: 1,
			color: () => Colors.black4A,
		},
	],
};

class ChartContainer extends PureComponent {
	render() {
		return (
			<View
				style={{
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.23,
					shadowRadius: 2.62,
					elevation: 2,
					backgroundColor: '#fff',
					marginBottom: 16,
					borderRadius: 4,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						marginTop: 16,
					}}
				>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon name="stop" size={20} color={Colors.primaryColor} />
						<Text tiny>Relawan</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon name="stop" size={20} color={Colors.black4A} />
						<Text tiny>Pendukung</Text>
					</View>
				</View>

				<LineChart
					data={data}
					width={Dimensions.get('window').width - 48} // from react-native
					height={150}
					verticalLabelRotation={90}
					chartConfig={{
						// withOuterLines: false,
						backgroundColor: '#fff',
						backgroundGradientFrom: '#fff',
						backgroundGradientTo: '#fff',
						decimalPlaces: 0,
						// color: (opacity = 1) => `rgba(0, 113, 225, ${opacity})`,
						color: (opacity = 0) => `rgba(255, 255, 225, ${opacity})`,
						// color: () => '#fff',
						labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
						propsForBackgroundLines: {
							strokeDasharray: '1', // solid background lines with no dashes
							strokeWidth: 0.25,
							stroke: 'rgba(0, 0, 0, .50)',
						},
						style: {
							backgroundColor: 'green',
						},
					}}
					style={{
						paddingBottom: 55,
						paddingTop: 20,
						// backgroundColor: '#fff',
						borderRadius: 4,
					}}
				/>
			</View>
		);
	}
}

export default ChartContainer;
