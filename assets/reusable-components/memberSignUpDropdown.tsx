import * as React from 'react';
import { View, ViewStyle } from "react-native";
import { Divider, TouchableRipple } from "react-native-paper";
import { DropdownItemProps } from "react-native-paper-dropdown";
import { BodyText } from './bodyText';

export const CustomDropdownItem = ({
    width,
    option,
    value,
    onSelect,
    toggleMenu,
    isLast,
  }: DropdownItemProps) => {
    const style: ViewStyle = React.useMemo(
      () => ({
        height: 50,
        width,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 16,
      }),
      [option.value, value, width]
    );
  
    return (
      <>
        <TouchableRipple
          onPress={() => {
            onSelect?.(option.value);
            toggleMenu();
          }}
          style={style}
        >
            <View style={{flex: 1}}>
                <BodyText style={{color: 'black', }}>{option.label} {option.price}</BodyText>
            </View>
        </TouchableRipple>
        {!isLast && <Divider style={{backgroundColor: 'rgb(172, 53, 0)'}}/>}
      </>
    );
  };