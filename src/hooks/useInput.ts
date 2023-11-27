import { useState } from 'react'

type UseInputType<T> = [T, (value: T) => void]

const useInput = <T>(initialValue: T): UseInputType<T> => {
  const [value, setValue] = useState<T>(initialValue)

  const setStoreValue = (value: T): void => {
    setValue(value)
  }

  return [value, setStoreValue]
}

export default useInput
