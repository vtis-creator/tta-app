import React from 'react'
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { BodyTextError } from './bodyText';

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          hasError && styles.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <BodyTextError style={styles.errorText}>{errors[name]}</BodyTextError>}
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Roboto-Black',
    fontSize: 16,
    height: 40,
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 15,
    backgroundColor: 'light grey'
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  }
})

export default CustomInput