import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { images } from '../constants'

const FormField = ({
  title,
  handleChangeText,
  otherStyles,
  value,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base w-full'
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#7b7b8b'}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {/* <Image src={!showPassword ? icons.eye : icons.hid} /> */}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField