import React from 'react';
import { InputForm, Dropdown } from '@app/components';

const FormRegisterContainer = ({
	name,
	changeName,
	phone,
	changePhone,
	// password,
	// changePassword,
	koordinator,
	changeKoordinator,
	provinsi,
	selectProvinsi,
	kabupaten,
	selectKabupaten,
	kecamatan,
	selectKecamatan,
	kelurahan,
	selectKelurahan,
	itemsProvinsi,
	itemsKabupaten,
	itemsKecamatan,
	itemsKelurahan,
}) => (
	<>
		<InputForm label="Nama Lengkap" value={name} onChangeText={changeName} />
		{/* <InputForm
			label="Password"
			value={password}
			onChangeText={changePassword}
			secureTextEntry={true}
		/> */}
		<InputForm
			label="Nomor HP"
			value={phone}
			onChangeText={changePhone}
			keyboardType="phone-pad"
		/>
		<InputForm
			label="Nomor HP Pengajak"
			value={koordinator}
			onChangeText={changeKoordinator}
			keyboardType="numeric"
		/>
		<Dropdown
			data={itemsProvinsi}
			label="Provinsi"
			value={provinsi}
			onChangeText={selectProvinsi}
			disabled={itemsProvinsi.length !== 0 ? false : true}
		/>
		<Dropdown
			data={itemsKabupaten}
			label="Kabupaten"
			value={kabupaten}
			onChangeText={selectKabupaten}
			disabled={itemsKabupaten.length !== 0 ? false : true}
		/>
		<Dropdown
			data={itemsKecamatan}
			label="Kecamatan"
			value={kecamatan}
			onChangeText={selectKecamatan}
			disabled={itemsKecamatan.length !== 0 ? false : true}
		/>
		<Dropdown
			data={itemsKelurahan}
			label="Kelurahan"
			value={kelurahan}
			onChangeText={selectKelurahan}
			disabled={itemsKelurahan.length !== 0 ? false : true}
		/>
	</>
);

export default FormRegisterContainer;
