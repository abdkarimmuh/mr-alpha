import { Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import colors from '~/assets/colors';

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
			color: () => colors.primaryColor,
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
			color: () => 'black',
		},
	],
};

class TimsesScreen extends PureComponent {
	render() {
		return (
			<LayoutAppbar title="Panel Timses">
				<LineChart
					data={data}
					width={Dimensions.get('window').width - 48} // from react-native
					height={200}
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
						backgroundColor: '#fff',
						borderRadius: 4,
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.23,
						shadowRadius: 2.62,
						elevation: 2,
					}}
				/>
			</LayoutAppbar>
		);
	}
}

export default TimsesScreen;
